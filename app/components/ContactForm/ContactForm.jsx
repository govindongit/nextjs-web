import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div className="w-full max-w-md bg-gray-100 rounded">
      <form className="p-5">
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name:
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Govind"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Contact Number:
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="12345 67890"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Drop your message here:
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  I have checked the T&C.
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
