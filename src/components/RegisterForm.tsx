"use client";

import { useState } from "react";
import { Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import { ErrorModal, StatusModal } from "@/components/Modals";
import { useLanguage } from "@/context/LanguageContext";
import { addCustomer, type CustomerPayload } from "@/lib/api";

const initialForm: CustomerPayload = {
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  phoneNumber: "",
  picture: "",
  streetName: "",
  houseNo: "",
  postalCode: "",
  city: "",
  country: "",
  additionalInfo: "",
  passportNo: "",
  passportIssue: null,
  passportExpiry: null,
  idCardNo: "",
  idCardIssue: null,
  idCardExpiry: null,
  LicenseNo: "",
  licenseIssue: null,
  licenseExpiry: null,
};

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400";
const labelClass = "block text-sm font-medium text-gray-700 mb-2";

function isAdult(dob: string) {
  const birth = new Date(dob);
  const today = new Date();
  const years = today.getFullYear() - birth.getFullYear();
  const hadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  return years > 18 || (years === 18 && hadBirthday);
}

export default function RegisterForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<CustomerPayload>(initialForm);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [serverErrors, setServerErrors] = useState<string[]>([]);
  const [registered, setRegistered] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdult(form.dob)) {
      setValidationErrors([t.erorrmsgforplus18]);
      return;
    }
    setSubmitting(true);
    const result = await addCustomer(form);
    setSubmitting(false);
    if (result.success) setRegistered(true);
    else setServerErrors(result.errors ?? []);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 mt-20 via-white to-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {t.createYour}
              <span className="text-red-600"> {t.eliteAccount}</span>
            </h2>
            <p className="text-gray-600 text-lg">{t.completeregisterMsg}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center gap-2 mb-6">
                <User className="h-5 w-5 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">{t.personalInformation}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className={labelClass}>{t.firstNamesymbol}</label>
                  <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} className={inputClass} placeholder={t.enteryourfirstName} required />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>{t.lastNamesymbol}</label>
                  <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} className={inputClass} placeholder={t.enteryourLastName} required />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    <Mail className="inline h-4 w-4 mr-1" />
                    {t.emailAddresssymbol}
                  </label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder={t.enterYourEmailAddress} required />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className={labelClass}>
                    <Phone className="inline h-4 w-4 mr-1" />
                    {t.phoneNumberSymbol}
                  </label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} className={inputClass} placeholder={t.enteryourPhoneNumber} required />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="dob" className={labelClass}>
                    <Calendar className="inline h-4 w-4 mr-1" />
                    {t.dateofbirthsymbol}
                  </label>
                  <input type="date" id="dob" name="dob" value={form.dob} onChange={handleChange} className={`${inputClass} md:w-1/2`} required />
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-5 w-5 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">{t.addressInformation}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="streetName" className={labelClass}>{t.streetNamesymbol}</label>
                  <input type="text" id="streetName" name="streetName" value={form.streetName} onChange={handleChange} className={inputClass} placeholder={t.enterStreetName} required />
                </div>
                <div>
                  <label htmlFor="houseNo" className={labelClass}>{t.houseNumbersymbol}</label>
                  <input type="text" id="houseNo" name="houseNo" value={form.houseNo} onChange={handleChange} className={inputClass} placeholder={t.houseNumbersymbol} required />
                </div>
                <div>
                  <label htmlFor="postalCode" className={labelClass}>{t.postalcodeSymbol}</label>
                  <input type="text" id="postalCode" name="postalCode" value={form.postalCode} onChange={handleChange} className={inputClass} placeholder="12345" required />
                </div>
                <div>
                  <label htmlFor="city" className={labelClass}>{t.citysymbol}</label>
                  <input type="text" id="city" name="city" value={form.city} onChange={handleChange} className={inputClass} placeholder="Enter city" required />
                </div>
                <div>
                  <label htmlFor="country" className={labelClass}>{t.countrysymbol}</label>
                  <input type="text" id="country" name="country" value={form.country} onChange={handleChange} className={inputClass} placeholder="Enter country" required />
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={submitting}
                className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:transform-none"
              >
                {t.completeRegistration}
              </button>
            </div>
          </form>
        </div>
      </div>

      <ErrorModal show={validationErrors.length > 0} errors={validationErrors} onClose={() => setValidationErrors([])} />

      {registered && (
        <StatusModal code="green" title={t.bookingadded} actionLabel={t.goBack}>
          {t.registeredmsgbox}
        </StatusModal>
      )}

      {serverErrors.length > 0 && (
        <StatusModal code="red" title={t.somethingwentwrong} actionLabel={t.goBack} onClose={() => setServerErrors([])}>
          <p className="pb-6">{t.errorMsgBox}</p>
          <div className="bg-red-100 text-red-800 p-4 text-left rounded-md mb-4">
            <ul className="list-disc list-inside">
              {serverErrors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          </div>
        </StatusModal>
      )}
    </>
  );
}
