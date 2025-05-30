# 🚆 Train Schedule App</br>
</br>
Full-stack застосунок для управління розкладом поїздів з авторизацією, CRUD-операціями, пошуком і захистом сторінок.</br>
</br>
## 🔧 Технології</br>
</br>
### Backend:</br>
- **NestJS**</br>
- **Prisma**</br>
- **PostgreSQL**</br>
- **JWT**</br>
</br>
### Frontend:</br>
- **Next.js (App Router)**</br>
- **TypeScript**</br>
- **Tailwind CSS**</br>
- **Redux Toolkit + RTK Query**</br>
</br>
---</br>
</br>
## 📦 Функціонал</br>
</br>
- 🔐 Авторизація / Реєстрація</br>
- ✅ Захищені маршрути (JWT)</br>
- 🚆 CRUD для поїздів (from, to, departure, arrival)</br>
- 🔍 Пошук поїздів</br>
- 🧪 Валідація форм</br>
- 🔓 Logout</br>
</br>
---</br>
</br>
## 🖥️ Локальний запуск</br>
</br>
### 🔙 Backend</br>

1. Перейти в директорію `train-schedule-backend`
2. Встановити залежності:
   ```bash
   npm install
   ```
3. Створити `.env` з даними для PostgreSQL:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/train_schedule
   JWT_SECRET=your_secret_key
   ```
4. Ініціалізувати Prisma:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
5. Запустити сервер:
   ```bash
   npm run start:dev
   ```
</br>
### 🖼️ Frontend</br>

1. Перейти в директорію `train-schedule-frontend`
2. Встановити залежності:
   ```bash
   npm install
   ```
3. Запустити клієнт:</br>
   ```bash
   npm run dev
   ```
4. Відкрити у браузері: [http://localhost:3000](http://localhost:3000)



 
