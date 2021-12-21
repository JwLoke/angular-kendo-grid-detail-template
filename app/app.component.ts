import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'my-app',
  template: `
  <div>
  <ng-template [ngIf]="loadGrid">
    <kendo-grid [kendoGridBinding]="gridData" selectable="true" style="height: 260px">
    <kendo-grid-column field="ProductID" [locked]="isLocked.value" width="100"></kendo-grid-column>
    <kendo-grid-column field="ProductName" width="150"></kendo-grid-column>
    <kendo-grid-column field="UnitPrice" width="100"></kendo-grid-column>
    <kendo-grid-column field="Testing" width="1000">
        <ng-template kendoGridCellTemplate let-dataItem="dataItem" let-rowIndex="rowIndex">
            <div>123</div>
        </ng-template>
    </kendo-grid-column>
    <ng-template [ngIf]="hasChild.value">
        <div *kendoGridDetailTemplate="let dataItem">
                <kendo-grid [kendoGridBinding]="gridData" selectable="true" style="height: 260px">
                <kendo-grid-column field="ProductID" [locked]="isLocked"></kendo-grid-column>
                <kendo-grid-column field="ProductName"></kendo-grid-column>
                <kendo-grid-column field="UnitPrice"></kendo-grid-column>
            </kendo-grid>
        </div>
    </ng-template>
</kendo-grid>
</ng-template>
</div>
{{isLocked | json}}
<button (click)="onClick()">Locked</button>   
`,
})
export class AppComponent {
  public gridData: any[] = products;
  public loadGrid = true;
  public isLocked = { value: true };
  public hasChild = { value: true };
}
