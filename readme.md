# Coupon Distribution with Abuse Prevention

This project is a web application designed to distribute coupons to guest users, with mechanisms to prevent abuse using IP and cookie tracking.

## Features 
- Guest access without login  
- Abuse prevention using IP and cookie tracking  
- Clear user feedback for successful claims and restrictions  
- Deployed on a live server for public access  

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (local or cloud-based)

### Step 1: Clone the Repository  
Clone the repository and navigate to the project folder:  
```
git clone https://github.com/theravi04/couponX

```

### Step 2: Install Dependencies  
Run the following command to install required dependencies:  
```
npm install in both client and server folder
```

### Step 3: Environment Variables  
Create a `.env` file in the root directory with the following content:  
```
DB=<YOUR_MONGO_DB_CONNECTION_STRING>
PORT=5000
```

### Step 4: Start the Server  
Start the server with this command:  
```
npm start
```
The server will run at `http://localhost:5000`

### Step 5: Frontend Setup  
Navigate to the frontend folder and install dependencies:  
```
cd client
npm install
npm run dev
```
The frontend will run at `http://localhost:5173`

## API Endpoints

### Coupon Endpoints
- **POST** `/api/coupons/claim` — Claim a coupon (requires IP and cookie validation)  
- **POST** `/api/coupons/add` — Add a new coupon to the system  
- **GET** `/api/coupons/all` — Retrieve all available coupons  

## Abuse Prevention Strategies

### IP Tracking
- Tracks user IP addresses when claiming coupons.  
- Restricts subsequent claims from the same IP for one hour.  

### Cookie Tracking
- Sets a cookie (`claim_cookie`) on the user's browser after a successful claim.  
- Prevents repeated claims from the same session.  

### Server-side Logging
- All claims are logged in MongoDB to ensure robust tracking.  

## Example Usage

### Adding a Coupon
```
POST /api/coupons/add
{
  "code": "DISCOUNT2025"
}
```

### Claiming a Coupon
```
POST /api/coupons/claim
{
  "code": "DISCOUNT2025"
}
```

### Sample Response (Success)
```
{
  "message": "Coupon claimed successfully",
  "coupon": "DISCOUNT2025"
}
```

### Sample Response (Abuse Prevention)
```
{
  "message": "Please wait 3600 seconds before claiming again."
}
```

## Future Enhancements
- Improved UI/UX for better user engagement  
- Enhanced admin dashboard for easier coupon management  
- Detailed logs with timestamps for improved tracking  
