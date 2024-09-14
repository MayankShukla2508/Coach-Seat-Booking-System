import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  coach = [
    {
      row_number: 1,
      seats: [
        { seat_number: 1, is_booked: false },
        { seat_number: 2, is_booked: false },
        { seat_number: 3, is_booked: false },
        { seat_number: 4, is_booked: false },
        { seat_number: 5, is_booked: false },
        { seat_number: 6, is_booked: false },
        { seat_number: 7, is_booked: false },
      ],
    },
    {
      row_number: 2,
      seats: [
        { seat_number: 8, is_booked: false },
        { seat_number: 9, is_booked: false },
        { seat_number: 10, is_booked: false },
        { seat_number: 11, is_booked: false },
        { seat_number: 12, is_booked: false },
        { seat_number: 13, is_booked: false },
        { seat_number: 14, is_booked: false },
      ],
    },
    {
      row_number: 3,
      seats: [
        { seat_number: 15, is_booked: false },
        { seat_number: 16, is_booked: false },
        { seat_number: 17, is_booked: false },
        { seat_number: 18, is_booked: false },
        { seat_number: 19, is_booked: false },
        { seat_number: 20, is_booked: false },
        { seat_number: 21, is_booked: false },
      ],
    },
    {
      row_number: 4,
      seats: [
        { seat_number: 22, is_booked: false },
        { seat_number: 23, is_booked: false },
        { seat_number: 24, is_booked: false },
        { seat_number: 25, is_booked: false },
        { seat_number: 26, is_booked: false },
        { seat_number: 27, is_booked: false },
        { seat_number: 28, is_booked: false },
      ],
    },
    {
      row_number: 5,
      seats: [
        { seat_number: 29, is_booked: false },
        { seat_number: 30, is_booked: false },
        { seat_number: 31, is_booked: false },
        { seat_number: 32, is_booked: false },
        { seat_number: 33, is_booked: false },
        { seat_number: 34, is_booked: false },
        { seat_number: 35, is_booked: false },
      ],
    },
    {
      row_number: 6,
      seats: [
        { seat_number: 36, is_booked: false },
        { seat_number: 37, is_booked: false },
        { seat_number: 38, is_booked: false },
        { seat_number: 39, is_booked: false },
        { seat_number: 40, is_booked: false },
        { seat_number: 41, is_booked: false },
        { seat_number: 42, is_booked: false },
      ],
    },
    {
      row_number: 7,
      seats: [
        { seat_number: 43, is_booked: false },
        { seat_number: 44, is_booked: false },
        { seat_number: 45, is_booked: false },
        { seat_number: 46, is_booked: false },
        { seat_number: 47, is_booked: false },
        { seat_number: 48, is_booked: false },
        { seat_number: 49, is_booked: false },
      ],
    },
    {
      row_number: 8,
      seats: [
        { seat_number: 50, is_booked: false },
        { seat_number: 51, is_booked: false },
        { seat_number: 52, is_booked: false },
        { seat_number: 53, is_booked: false },
        { seat_number: 54, is_booked: false },
        { seat_number: 55, is_booked: false },
        { seat_number: 56, is_booked: false },
      ],
    },
    {
      row_number: 9,
      seats: [
        { seat_number: 57, is_booked: false },
        { seat_number: 58, is_booked: false },
        { seat_number: 59, is_booked: false },
        { seat_number: 60, is_booked: false },
        { seat_number: 61, is_booked: false },
        { seat_number: 62, is_booked: false },
        { seat_number: 63, is_booked: false },
      ],
    },
    {
      row_number: 10,
      seats: [
        { seat_number: 64, is_booked: false },
        { seat_number: 65, is_booked: false },
        { seat_number: 66, is_booked: false },
        { seat_number: 67, is_booked: false },
        { seat_number: 68, is_booked: false },
        { seat_number: 69, is_booked: false },
        { seat_number: 70, is_booked: false },
      ],
    },
    {
      row_number: 11,
      seats: [
        { seat_number: 71, is_booked: false },
        { seat_number: 72, is_booked: false },
        { seat_number: 73, is_booked: false },
        { seat_number: 74, is_booked: false },
        { seat_number: 75, is_booked: false },
        { seat_number: 76, is_booked: false },
        { seat_number: 77, is_booked: false },
      ],
    },
    {
      row_number: 12,
      seats: [
        { seat_number: 78, is_booked: false },
        { seat_number: 79, is_booked: false },
        { seat_number: 80, is_booked: false },
      ],
    },
  ];

  numberOfSeats: number = 0; // User input for number of seats to be booked

  // Book seats based on user input
  bookSeats() {
    if (this.numberOfSeats <= 0 || this.numberOfSeats > 7) {
      alert('Please enter a valid number of seats (between 1 and 7)');
      return;
    }

    let seatsToBook: any[] = [];

    // Try to find consecutive seats first
    seatsToBook = this.findConsecutiveSeats();

    // If not enough seats found consecutively, try adjacent rows
    if (seatsToBook.length < this.numberOfSeats) {
      seatsToBook = this.findAdjacentSeats();
    }

    // If seats were found, mark them as booked
    if (seatsToBook.length > 0) {
      seatsToBook.forEach((seat) => {
        seat.is_booked = true;
      });
      alert(
        `Booked seats: ${seatsToBook
          .map((seat) => seat.seat_number)
          .join(', ')}`
      );
    } else {
      alert('Not enough seats available.');
    }
  }

  // Find consecutive available seats in a single row
  private findConsecutiveSeats(): any[] {
    let seatsToBook: any[] = [];
    for (let row of this.coach) {
      let availableSeatsInRow: any[] = [];
      for (let seat of row.seats) {
        if (!seat.is_booked) {
          availableSeatsInRow.push(seat);
        } else {
          availableSeatsInRow = []; // Reset if a booked seat is encountered
        }

        // If we have enough consecutive available seats
        if (availableSeatsInRow.length >= this.numberOfSeats) {
          seatsToBook = availableSeatsInRow.slice(0, this.numberOfSeats);
          return seatsToBook;
        }
      }
    }
    return seatsToBook;
  }

  // Find available seats in adjacent rows if consecutive seats are not available
  private findAdjacentSeats(): any[] {
    let seatsToBook: any[] = [];
    let availableSeats: any[] = [];
    let requiredSeats = this.numberOfSeats;

    // Iterate through rows to collect available seats
    for (let row of this.coach) {
      for (let seat of row.seats) {
        if (!seat.is_booked) {
          availableSeats.push(seat);
        } else {
          // If a booked seat is encountered, check if we have enough seats
          if (availableSeats.length >= requiredSeats) {
            seatsToBook = availableSeats.slice(0, requiredSeats);
            return seatsToBook;
          }
          availableSeats = []; // Reset if a booked seat is encountered
        }
      }

      // Check at the end of the row
      if (availableSeats.length >= requiredSeats) {
        seatsToBook = availableSeats.slice(0, requiredSeats);
        return seatsToBook;
      }
    }

    // If still not enough seats, combine seats from adjacent rows
    availableSeats = [];
    for (let i = 0; i < this.coach.length; i++) {
      let row = this.coach[i];
      availableSeats = availableSeats.concat(
        row.seats.filter((seat) => !seat.is_booked)
      );
      if (availableSeats.length >= requiredSeats) {
        seatsToBook = availableSeats.slice(0, requiredSeats);
        return seatsToBook;
      }
    }

    return seatsToBook;
  }

  // Display coach layout (for testing in the console)
  displayCoach() {
    console.log('Current seating:');
    this.coach.forEach((row) => {
      console.log(
        `Row ${row.row_number}:`,
        row.seats.map((seat) => (seat.is_booked ? 'B' : 'A')).join(' ')
      );
    });
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   // Coach seating arrangement (7 seats per row, except last row with 3 seats)
//   coach = [
//     {
//       row_number: 1,
//       seats: [
//         { seat_number: 1, is_booked: true },
//         { seat_number: 2, is_booked: false },
//         { seat_number: 3, is_booked: false },
//         { seat_number: 4, is_booked: false },
//         { seat_number: 5, is_booked: false },
//         { seat_number: 6, is_booked: false },
//         { seat_number: 7, is_booked: false },
//       ],
//     },
//     {
//       row_number: 2,
//       seats: [
//         { seat_number: 8, is_booked: false },
//         { seat_number: 9, is_booked: false },
//         { seat_number: 10, is_booked: false },
//         { seat_number: 11, is_booked: false },
//         { seat_number: 12, is_booked: false },
//         { seat_number: 13, is_booked: false },
//         { seat_number: 14, is_booked: false },
//       ],
//     },
//     {
//       row_number: 3,
//       seats: [
//         { seat_number: 15, is_booked: false },
//         { seat_number: 16, is_booked: false },
//         { seat_number: 17, is_booked: false },
//         { seat_number: 18, is_booked: true },
//         { seat_number: 19, is_booked: false },
//         { seat_number: 20, is_booked: false },
//         { seat_number: 21, is_booked: false },
//       ],
//     },
//     {
//       row_number: 4,
//       seats: [
//         { seat_number: 22, is_booked: false },
//         { seat_number: 23, is_booked: false },
//         { seat_number: 24, is_booked: false },
//         { seat_number: 25, is_booked: false },
//         { seat_number: 26, is_booked: false },
//         { seat_number: 27, is_booked: true },
//         { seat_number: 28, is_booked: false },
//       ],
//     },
//     {
//       row_number: 5,
//       seats: [
//         { seat_number: 29, is_booked: false },
//         { seat_number: 30, is_booked: true },
//         { seat_number: 31, is_booked: false },
//         { seat_number: 32, is_booked: false },
//         { seat_number: 33, is_booked: false },
//         { seat_number: 34, is_booked: false },
//         { seat_number: 35, is_booked: false },
//       ],
//     },
//     {
//       row_number: 6,
//       seats: [
//         { seat_number: 36, is_booked: false },
//         { seat_number: 37, is_booked: false },
//         { seat_number: 38, is_booked: false },
//         { seat_number: 39, is_booked: false },
//         { seat_number: 40, is_booked: false },
//         { seat_number: 41, is_booked: false },
//         { seat_number: 42, is_booked: true },
//       ],
//     },
//     {
//       row_number: 7,
//       seats: [
//         { seat_number: 43, is_booked: false },
//         { seat_number: 44, is_booked: false },
//         { seat_number: 45, is_booked: true },
//         { seat_number: 46, is_booked: false },
//         { seat_number: 47, is_booked: false },
//         { seat_number: 48, is_booked: false },
//         { seat_number: 49, is_booked: false },
//       ],
//     },
//     {
//       row_number: 8,
//       seats: [
//         { seat_number: 50, is_booked: false },
//         { seat_number: 51, is_booked: false },
//         { seat_number: 52, is_booked: true },
//         { seat_number: 53, is_booked: false },
//         { seat_number: 54, is_booked: false },
//         { seat_number: 55, is_booked: false },
//         { seat_number: 56, is_booked: false },
//       ],
//     },
//     {
//       row_number: 9,
//       seats: [
//         { seat_number: 57, is_booked: false },
//         { seat_number: 58, is_booked: false },
//         { seat_number: 59, is_booked: false },
//         { seat_number: 60, is_booked: false },
//         { seat_number: 61, is_booked: true },
//         { seat_number: 62, is_booked: false },
//         { seat_number: 63, is_booked: false },
//       ],
//     },
//     {
//       row_number: 10,
//       seats: [
//         { seat_number: 64, is_booked: false },
//         { seat_number: 65, is_booked: false },
//         { seat_number: 66, is_booked: false },
//         { seat_number: 67, is_booked: false },
//         { seat_number: 68, is_booked: false },
//         { seat_number: 69, is_booked: false },
//         { seat_number: 70, is_booked: true },
//       ],
//     },
//     {
//       row_number: 11,
//       seats: [
//         { seat_number: 71, is_booked: false },
//         { seat_number: 72, is_booked: false },
//         { seat_number: 73, is_booked: true },
//         { seat_number: 74, is_booked: false },
//         { seat_number: 75, is_booked: false },
//         { seat_number: 76, is_booked: false },
//         { seat_number: 77, is_booked: false },
//       ],
//     },
//     {
//       row_number: 12,
//       seats: [
//         { seat_number: 78, is_booked: true },
//         { seat_number: 79, is_booked: false },
//         { seat_number: 80, is_booked: false },
//       ],
//     },
//   ];

//   numberOfSeats: number = 0; // User input for number of seats to be booked

//   // Book seats based on user input
//   bookSeats() {
//     if (this.numberOfSeats <= 0 || this.numberOfSeats > 7) {
//       alert('Please enter a valid number of seats (between 1 and 7)');
//       return;
//     }

//     let seatsToBook = [];
//     // Check each row for availability of seats
//     for (let row of this.coach) {
//       let availableSeats = row.seats.filter((seat) => !seat.is_booked); // Filter available seats
//       if (availableSeats.length >= this.numberOfSeats) {
//         // If enough seats available in a single row, book them
//         seatsToBook = availableSeats.slice(0, this.numberOfSeats);
//         break;
//       }
//     }

//     if (seatsToBook.length > 0) {
//       // Book seats and mark them as booked
//       seatsToBook.forEach((seat) => {
//         seat.is_booked = true;
//       });
//       alert(
//         `Booked seats: ${seatsToBook
//           .map((seat) => seat.seat_number)
//           .join(', ')}`
//       );
//     } else {
//       alert('Not enough seats available in a single row');
//     }
//   }

//   // Display coach layout (for testing in the console)
//   displayCoach() {
//     console.log('Current seating:');
//     this.coach.forEach((row) => {
//       console.log(
//         `Row ${row.row_number}:`,
//         row.seats.map((seat) => (seat.is_booked ? 'B' : 'A')).join(' ')
//       );
//     });
//   }
// }
