import StBaseElement from '../../StBase';
import StFormInterface from '../../interface/StFormInterface';

class StSelect extends StBaseElement implements StFormInterface {
  constructor() {
    super();
  }

  getFormData(): Record<string, any> {
    return {};
  }

  setFormData(data: Record<string, any>): void {
    return;
  }

  validate(): boolean {
    return true;
  }

  reset(): void {
    return;
  }

  submit(): void {
    return;
  }
}

export default StSelect;