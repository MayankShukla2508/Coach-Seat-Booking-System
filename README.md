# Coach-Seat-Booking-System
PROBLEM STATEMENT

Assessment
Problem Description:
1. There are 80 seats in a coach of a train with only 7 seats in a row and last row of only 3
seats. For simplicity, there is only one coach in this train.
2. One person can reserve up to 7 seats at a time.
3. If a person is reserving seats, the priority will be to book them in one row.
4. If seats are not available in one row then the booking should be done in such a way that the
nearby seats are booked.
5. User can book as many tickets as s/he wants until the coach is full.
6. You don’t have to create login functionality for this application.
How it should function?
1. Input required will only be the required number of seats. Example: 2 or 4 or 6 or 1 etc.
2. Output should be seats numbers that have been booked for the user along with the display of
all the seats and their availability status through color or number or anything else that you may
feel fit.
What all you need to submit?
1. You need to write code (functions) as per the conditions and functionality mentioned above.
2. You need to submit the database structure you’ll be creating as per your code.
3. You need to host it on any of the free/paid platform so that you can provide as a working web
URL for this problem.
4. You need to send us the code a zip file for us to look at your code and evaluate the same.
You can also send us GIT link for the same.
There are some seats already booked in that coach. So your code should be able to find the
seats available and then book them.

SOLUTION EXPLAINATION:
Coach Layout:
The coach is represented as an array of rows, where each row is an object with a row_number and a list of seats.
Each seat in the row is an object with two properties: seat_number and is_booked (which is true if the seat is already reserved, and false if it is available).
Input:
The numberOfSeats variable is used to capture the number of seats the user wants to book.
The user can request between 1 and 7 seats, and the logic ensures that the request is valid.
Logic to Handle Seat Booking:
Step 1: Finding Maximum Consecutive Available Seats in Each Row:
Objective: We need to find out how many consecutive seats are available in each row.
Approach:
We iterate over each row and examine the seats array within that row.
We keep track of consecutive unbooked seats using two counters:
currentConsecutiveSeats: This counts how many unbooked seats we encounter in a row, but resets if we hit a booked seat.
maxConsecutiveSeats: This keeps track of the maximum consecutive seats we found in the row. At the end of checking a row, we store the highest value for that row.
We store the row number (or index) and the maximum number of consecutive available seats in a map (rowAvailabilityMap).
Step 2: Sorting Rows Based on Available Seats:
Objective: After figuring out how many consecutive seats are available in each row, we want to prioritize rows with more consecutive available seats.
Approach:
We take the entries from rowAvailabilityMap and sort them in descending order based on the highest consecutive available seats.
The rows with the most available consecutive seats will appear first, making it easier to prioritize booking in those rows.
Step 3: Booking Seats in the Best Row:
Objective: Once rows are sorted, we want to book seats in the row with the most available consecutive seats.
Approach:
We iterate over the sorted rows and attempt to book the number of seats requested by the user.
In each row, we loop over the seats and find consecutive available seats.
If we find enough consecutive seats (equal to or greater than the number of seats requested), we stop searching and book those seats.
If a row doesn't have enough consecutive seats, we move to the next row (which should have fewer consecutive seats as per sorting).
Booking Logic:
Once we identify the best row and the seats to be booked, we loop through those seats and mark them as is_booked = true to finalize the booking.
The user is alerted with the seat numbers that were successfully booked.
Handling Edge Cases:
If no row has enough consecutive seats, the system will alert the user that no available seats meet their requirements.
The program also prevents users from requesting more than 7 seats at a time, as the problem specifies a maximum of 7 seats can be booked.

Key Elements Used:
Map: A Map object is used to store the row index and the maximum number of consecutive available seats for that row. This structure allows us to easily sort the data and retrieve the row with the most available seats.
Filtering and Iteration: The solution leverages JavaScript's array methods (forEach and filter) to process seat data. This helps in scanning through each row and identifying available seats efficiently.
Sorting: The rows are sorted based on their available consecutive seats using Array.sort(), which ensures that we prioritize booking seats in rows with the most available options.
Alerting the User: If the booking is successful, the user is alerted with the seat numbers that have been booked. If not enough consecutive seats are available, the user is informed accordingly.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/MayankShukla2508/Coach-Seat-Booking-System)
