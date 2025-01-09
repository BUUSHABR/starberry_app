export function formatWithSeparator(values, separator = " | ") {
    return values.filter(Boolean).join(separator);
}


export function formatPrice(price, currencyCode) {
    try {
  
      const formatter = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
      });
  
      // Format the price and return
      return formatter.format(price);
    } catch (error) {
      console.error('Error formatting price:', error);
      return price?.toString(); // Fallback to a plain number string
    }
  }
  
export function attachTextIfPresent(attribute, text) {
    try {
      if (attribute) {
        return `${attribute} ${text}`;
      } else {
        return '';
      }
    } catch (error) {
      console.error('Error handling attribute:', error);
      return '';
    }
  }
  
export function getShortForm(attribute) {
    const shortForms = {
      'squareFeet': 'sq ft',
      'squareMeters': 'sqm',
      'squareYards': 'sq yd',
      'hectares': 'ha',
      'acres': 'ac',
   
    };
  
    return shortForms[attribute] || attribute; 
  }
  

export const redirectToEmail = (emailId) => {
    if (emailId) {
        return <a href={`mailto:${emailId}`} className="underline">Email</a>
    } else {
      return null
    }
   
  };