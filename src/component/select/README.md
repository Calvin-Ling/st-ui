# Select
## Summery
> 选择一些选项
## Interfaces
* [Form Interface](../StFormInterface.ts)
## Attributes
* multiple:boolean = false
* clearable:boolean = false
* placeholder:string = ''
* enableShowSelected:boolean = false
  * 开启“查看已选”功能
## Properties
* value:string | string[]
* show:() => void
* hide:() => void
## Events
* st-change
  * Emitted when the control's value changes
  * arguments: newVal, val
## Slots
* default:
  * 选项列表
* name=prefix
  * input框的前缀，如图标等
## Examples
```Html
<st-base-select multiple clearable placeholder="Select one">
  <st-base-option value="option-a">option-a</st-base-option>
  <st-base-option value="option-b">option-b</st-base-option>
  <st-base-option value="option-c">option-c</st-base-option>
</st-base-select>
<script>
  const comp = $0;
  comp.value = ["option-a", "options-b"];
  comp.show();
  comp.hide();
  comp.addEventListener('st-change', (newVal, val) => {
    console.log('value changed from' + newVal + 'to' + val);
  })
</script>
```