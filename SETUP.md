# Setup Guide — Read This First

This is a complete full-stack app already written for you. You just need to:
1. Add your MongoDB password
2. Install the packages
3. Run it

Follow these steps exactly, in order.

---

## Step 1: Unzip this folder

Right-click `codveda-task7.zip` → Extract All. Move the extracted `codveda-task7` folder to
`C:\Users\pjgir\codveda-task7`

You should end up with two folders inside it: `backend` and `frontend`.

---

## Step 2: Set up your MongoDB connection (backend)

1. Open the `backend` folder in VS Code:
   ```
   cd C:\Users\pjgir\codveda-task7\backend
   code .
   ```
2. Find the file `.env.example`. Make a COPY of it and rename the copy to exactly `.env` (no ".example").
3. Open `.env` and fill in your real MongoDB connection details:
   ```
   MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER_ADDRESS.mongodb.net/codveda?retryWrites=true&w=majority
   JWT_SECRET=anyLongRandomTextYouWant123!
   PORT=5000
   ```
   - Get your real connection string from MongoDB Atlas → your cluster → **Connect → Drivers**
   - Replace `YOUR_USERNAME` and `YOUR_PASSWORD` with your real database user credentials (no `< >` brackets)
   - `JWT_SECRET` can be any random text you make up — just keep it private
4. Make sure your current IP is allowed in Atlas: **Network Access → Add Current IP Address**

---

## Step 3: Install and run the backend

In the terminal (still inside the `backend` folder):
```
npm install
npm start
```

You should see:
```
Connected to MongoDB
Server running on http://localhost:5000
```

**Leave this terminal running.**

---

## Step 4: Install and run the frontend

Open a **new** terminal window:
```
cd C:\Users\pjgir\codveda-task7\frontend
npm install
npm run dev
```

You should see a link like `http://localhost:5173/` — open that in your browser.

---

## Step 5: Try it out

1. You'll see a Login screen. Click "Sign up" and create an account.
2. After signing up, log in with that same username/password.
3. You'll see a form to add products, and a live product list below it.
4. Try adding a product, and deleting one — this all talks to your real MongoDB database now.

---

## If something doesn't work

- **"bad auth" error in backend terminal** → your `.env` password is wrong or still has `<` `>` brackets in it
- **"ERR_CONNECTION_REFUSED" in browser** → one of the two servers (backend on 5000, or frontend on 5173) isn't running — check both terminals
- **CORS error in browser console** → make sure you're using the backend from THIS project (port 5000), not an old one
