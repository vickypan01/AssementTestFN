import { useForm } from "react-hook-form";
import FormInput from "../../common_components/Input";
import type { VendorFormData } from "../../Type/type";

export default function VendorForm() {
  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm<VendorFormData>({
    mode: "onChange",
  });

  const onSubmit = (data: VendorFormData) => {
    console.log("Vendor Payload", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
space-y-6
p-6
bg-white
rounded-lg
shadow
"
    >
      <h2 className="text-xl font-bold">Create Vendor</h2>

      {/* Basic Details */}

      <FormInput
        label="Vendor Name"
        name="vendorName"
        register={register}
        error={errors.vendorName?.message}
      />

      <FormInput
        label="GST"
        name="gst"
        register={register}
        error={errors.gst?.message}
      />

      <FormInput
        label="PAN"
        name="pan"
        register={register}
        error={errors.pan?.message}
      />

      <div>
        <label>Vendor Category</label>

        <select
          className="border p-2 w-full"
          {...register("vendorCategory", {
            required: "Vendor category required",
          })}
        >
          <option value="">Select Category</option>

          <option value="IT">IT</option>

          <option value="Supplier">Supplier</option>

          <option value="Manufacturing">Manufacturing</option>
        </select>

        <p className="text-red-500">{errors.vendorCategory?.message}</p>
      </div>

      {/* Address */}

      <h3 className="font-semibold">Address</h3>

      <FormInput
        label="Address"
        name="address.line1"
        register={register}
        error={errors.address?.line1?.message}
      />

      <FormInput label="City" name="address.city" register={register} />

      <FormInput label="State" name="address.state" register={register} />

      <FormInput
        label="Pincode"
        name="address.pincode"
        register={register}
        error={errors.address?.pincode?.message}
      />

      {/* Contact Details */}

      <h3 className="font-semibold">Contact Details</h3>

      <FormInput
        label="Contact Name"
        name="contactDetails.name"
        register={register}
      />

      <FormInput
        label="Email"
        name="contactDetails.email"
        register={register}
        error={errors.contactDetails?.email?.message}
      />

      <FormInput
        label="Phone"
        name="contactDetails.phone"
        register={register}
      />

      {/* Bank Details */}

      <h3 className="font-semibold">Bank Details</h3>

      <FormInput
        label="Account Name"
        name="bankDetails.accountName"
        register={register}
      />

      <FormInput
        label="Account Number"
        name="bankDetails.accountNumber"
        register={register}
      />

      <FormInput
        label="IFSC Code"
        name="bankDetails.ifsc"
        register={register}
      />

      {/* Payment */}

      <FormInput
        label="Payment Terms"
        name="paymentTerms"
        register={register}
      />

      {/* Certifications */}

      <FormInput
        label="Certification"
        name="certifications"
        register={register}
      />

      {/* Documents */}

      <div>
        <label>Upload Documents</label>

        <input
          type="file"
          multiple
          {...register(
            "documents",

            {
              required: "Document upload required",

              validate: (files) => {
                if (files.length > 5) return "Maximum 5 files allowed";

                return true;
              },
            },
          )}
          className="
border
p-2
w-full
"
        />

        {errors.documents && (
          <p className="text-red-500">{errors.documents.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="
bg-blue-600
text-white
px-5
py-2
rounded
"
      >
        Save Vendor
      </button>
    </form>
  );
}
