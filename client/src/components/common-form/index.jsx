import { Button } from "../ui/button";
import FormControls from "./form-controls";

export default function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
}) {
  console.log(formControls);
  return (
    <form onSubmit={handleSubmit}>
      {/* form controls renders here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button type="submit" className="mt-5 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}
