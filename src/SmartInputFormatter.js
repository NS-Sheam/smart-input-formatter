// src/SmartInputFormatter.js
import React, { useState } from "react";
import { format } from "date-fns";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const SmartInputFormatter = ({
  type,
  value,
  onChange,
  placeholder,
  locale = "en-US",
  customPattern,
  currency = "USD",
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleInputChange = (e) => {
    let formattedValue = e.target.value;

    switch (type) {
      case "phone":
        const phoneNumber = parsePhoneNumberFromString(formattedValue, "US");
        formattedValue = phoneNumber ? phoneNumber.formatNational() : formattedValue;
        break;
      case "currency":
        formattedValue = new Intl.NumberFormat(locale, {
          style: "currency",
          currency,
        }).format(parseFloat(formattedValue.replace(/[^0-9.-]+/g, "")) || 0);
        break;
      case "date":
        try {
          formattedValue = format(new Date(formattedValue), "MM/dd/yyyy");
        } catch {
          // Invalid date format, skip formatting
        }
        break;
      default:
        if (customPattern) {
          formattedValue = formattedValue.replace(customPattern, "");
        }
        break;
    }

    setInputValue(formattedValue);
    if (onChange) onChange(formattedValue);
  };

  return (
    <input
      {...props}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default SmartInputFormatter;
