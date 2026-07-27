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
    const payload = {
      ...data,
      documents: Array.from(data.documents ?? []).map((file) => file.name),
    };

    alert(JSON.stringify(payload, null, 2));

    console.log("Vendor Payload", payload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg bg-white p-6 shadow space-y-8"
    >
      <h2 className="text-2xl font-bold">Create Vendor</h2>

      {/* Basic Details */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basic Details</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
            <label className="mb-1 block text-sm font-medium">
              Vendor Category
            </label>

            <select
              className="h-10 w-full rounded-md border px-3"
              {...register("vendorCategory", {
                required: "Vendor category required",
              })}
            >
              <option value="">Select Category</option>
              <option value="IT">IT</option>
              <option value="Supplier">Supplier</option>
              <option value="Manufacturing">Manufacturing</option>
            </select>

            <p className="mt-1 text-sm text-red-500">
              {errors.vendorCategory?.message}
            </p>
          </div>
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Address</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Contact Details</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </div>

      {/* Bank Details */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Bank Details</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </div>

      {/* Other Details */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Other Details</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FormInput
            label="Payment Terms"
            name="paymentTerms"
            register={register}
          />

          <FormInput
            label="Certifications"
            name="certifications"
            register={register}
          />

          <div>
            <label className="mb-1 block text-sm font-medium">
              Upload Documents
            </label>

            <input
              type="file"
              multiple
              className="h-10 w-full rounded-md border px-2"
              {...register("documents", {
                required: "Document upload required",
                validate: (files) =>
                  files.length <= 5 || "Maximum 5 files allowed",
              })}
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.documents?.message}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-8 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Save Vendor
        </button>
      </div>
    </form>
  );
}
