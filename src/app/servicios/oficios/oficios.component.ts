import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { OnInit, NgModule } from '@angular/core';
import { Item } from '../types';

@Component({
  selector: 'app-oficios',
  templateUrl: './oficios.component.html',
  styleUrls: ['./oficios.component.scss'],
})


export class OficiosComponent implements OnInit {

  @Input() items: Item[] = [];
  @Input() selectedItems: string[] = [];
  @Input() title = 'Lista de Oficios';

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<string[]>();
  
  filteredItems: Item[] = [];
  workingSelectedValues: string[] = [];
  
  ngOnInit() {
    this.filteredItems = [...this.items];
    this.workingSelectedValues = [...this.selectedItems];
  }
  
  trackItems(index: number, item: Item) {
    return item.value;
  }
  
  cancelChanges() {
    this.selectionCancel.emit();
  }
  
  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValues);
  }
  
  searchbarInput(ev:any) {
    this.filterList(ev.target.value);
  }
  
  /**
   * Update the rendered view with
   * the provided search query. If no
   * query is provided, all data
   * will be rendered.
   */
  filterList(searchQuery: string | undefined) {
    /**
     * If no search query is defined,
     * return all options.
     */
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase(); 
      this.filteredItems = this.items.filter(item => {
        return item.nombre.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  isChecked(value: string) {
    return this.workingSelectedValues.find(item => item === value);
  }
  
  checkboxChange(ev:any) {
    const { checked, value } = ev.detail;
    
    if (checked) {
      this.workingSelectedValues = [
        ...this.workingSelectedValues,
        value
      ]
    } else {
      this.workingSelectedValues = this.workingSelectedValues.filter(item => item !== value);
    }
  }

}
