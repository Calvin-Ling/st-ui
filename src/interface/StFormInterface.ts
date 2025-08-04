interface StFormInterface {
  getFormData(): Record<string, any>;
  setFormData(data: Record<string, any>): void;
  validate(): boolean;
}

export default StFormInterface;