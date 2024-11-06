# Smart Input Formatter

A React-based input formatter for handling phone numbers, currency, dates, and custom patterns.

## Installation

```bash
npm install smart-input-formatter
```

## Features

- **Phone Number Formatting**: Automatically formats phone numbers to national formats.
- **Currency Formatting**: Formats input as currency based on locale and currency code.
- **Date Formatting**: Formats date input in `MM/DD/YYYY` format.
- **Custom Pattern Formatting**: Allows custom regex patterns for flexible input formats.

## Installation

Install the package using npm:

```bash
npm install smart-input-formatter
```

### 4. **Usage**

Provide code examples that demonstrate how to use the package in various scenarios.

## Usage

### Importing the Component

```javascript
import SmartInputFormatter from "smart-input-formatter";
```

```javascript
import SmartInputFormatter from "smart-input-formatter";

function App() {
  return (
    <div>
      <h3>Phone Number Input</h3>
      <SmartInputFormatter
        type="phone"
        placeholder="Enter phone number"
      />

      <h3>Currency Input</h3>
      <SmartInputFormatter
        type="currency"
        placeholder="Enter amount"
        locale="en-US"
        currency="USD"
      />

      <h3>Date Input</h3>
      <SmartInputFormatter
        type="date"
        placeholder="MM/DD/YYYY"
      />

      <h3>Custom Pattern Input</h3>
      <SmartInputFormatter
        customPattern={/[^a-zA-Z0-9]/g}
        placeholder="Custom pattern input"
      />
    </div>
  );
}

export default App;
```

## Props

| Prop            | Type       | Default     | Description                                                                                          |
| --------------- | ---------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `type`          | `string`   | `undefined` | Specifies the input type. Can be `'phone'`, `'currency'`, `'date'`, or `customPattern`.              |
| `placeholder`   | `string`   | `""`        | Placeholder text for the input field.                                                                |
| `locale`        | `string`   | `'en-US'`   | Locale used for currency formatting (optional, only for `currency` type).                            |
| `currency`      | `string`   | `'USD'`     | Currency code for currency formatting (optional, only for `currency` type).                          |
| `customPattern` | `RegExp`   | `undefined` | Custom regular expression pattern for formatting (optional, used only if `type` is `customPattern`). |
| `onChange`      | `function` | `undefined` | Callback function called when the input changes.                                                     |

### Additional Examples

#### Using Custom Pattern for Hex Color Code

```javascript
<SmartInputFormatter
  customPattern={/[^a-fA-F0-9]/g}
  placeholder="#FFFFFF"
  onChange={(value) => console.log('Formatted hex color:', value)}
/>

<SmartInputFormatter
  type="currency"
  placeholder="Enter amount"
  locale="de-DE"
  currency="EUR"
/>
```

### 6. **Contributing**

Encourage other developers to contribute and explain how they can do so.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your message'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request.
