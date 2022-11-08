import * as React from 'react';

export default function Calendar() {
    function format(inputDate) {
        let date, month, year;
      
        date = inputDate.getDate();
        month = inputDate.getMonth() + 1;
        year = inputDate.getFullYear();
      
          date = date
              .toString()
              .padStart(2, '0');
      
          month = month
              .toString()
              .padStart(2, '0');
      
        return `${date}/${month}/${year}`;
      }
      
      const result = new Date('2022', '2', '28').toLocaleDateString('en-GB');

      console.log(result);
}