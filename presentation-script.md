# 🇩🇪 German Version

## 1. Intro / Elevator Pitch (00:30)

Hallo zusammen, ich stelle euch heute unser Projekt **Oma-Netz** vor.
Oma-Netz ist eine Web-App, die ältere Menschen, Helferinnen und Helfer und Angehörige miteinander verbindet.
Viele Seniorinnen und Senioren brauchen im Alltag kleine Hilfe, zum Beispiel beim Einkaufen, bei Arztterminen oder bei digitalen Themen.
Unser Projekt löst genau dieses Problem: Hilfe soll schnell, einfach und sicher organisiert werden.
Die Zielgruppe sind vor allem drei Rollen: Senior, Helper und Relative.

👉 Show:
- Startseite der App
- Kurzer Blick auf den Titel und die Hauptidee

## 2. Planning (02:00)

Am Anfang haben wir nicht sofort programmiert.
Wir haben zuerst geplant, damit wir die Anforderungen klar verstehen.
Dafür haben wir mit **Excalidraw** gearbeitet.
Dort haben wir unsere App-Struktur und den Flow gezeichnet: Wer klickt wo, welche Seite kommt als Nächstes, und welche Daten werden gebraucht.

Danach haben wir **User Stories** geschrieben.
Das war sehr wichtig, weil wir drei verschiedene Rollen haben.
Ein Senior will schnell eine Anfrage erstellen.
Ein Helper will offene Anfragen sehen und direkt helfen.
Ein Relative will den Überblick behalten und Sicherheit haben.

Die Hauptidee war: wenige Schritte, klare Buttons, einfache Sprache.
Die App soll für ältere Menschen nicht kompliziert wirken.

👉 Show:
- Excalidraw-Diagramm (Architektur oder User Flow)
- Kurze Liste mit 2–3 User Stories
- Rollenübersicht: Senior / Helper / Relative

## 3. Product Demo (05:00)

Ich zeige jetzt eine kurze Geschichte aus dem echten Alltag.
Stellt euch vor: Frau Müller ist Seniorin und braucht Hilfe beim Einkaufen.

**Schritt 1: Registrierung und Login**
Frau Müller registriert sich mit E-Mail und Passwort.
Danach loggt sie sich ein.
Hier war uns wichtig, dass das Formular klar und ruhig ist.

👉 Show:
- Register-Seite
- Login-Seite

**Schritt 2: Anfrage erstellen**
Nach dem Login kommt sie ins Dashboard.
Dort klickt sie auf „Neue Anfrage“.
Sie schreibt: „Brauche heute Hilfe beim Einkaufen um 17 Uhr“.
Dann speichert sie die Anfrage.

👉 Show:
- Dashboard
- Request/Create-Formular
- Klick auf „Erstellen“ oder „Speichern“

**Schritt 3: Helper sieht die Anfrage**
Ein Helper loggt sich ein und sieht im Dashboard offene Anfragen.
Er findet die Anfrage von Frau Müller und akzeptiert sie.

👉 Show:
- Helper-Dashboard
- Liste der offenen Requests
- Statusänderung: offen → angenommen

**Schritt 4: Kommunikation**
Nach der Annahme startet die Kommunikation.
Zum Beispiel per Nachrichtenfeld oder über Status-Updates in der Anfrage.
So wissen beide Seiten: Hilfe ist organisiert.

👉 Show:
- Detailseite einer Anfrage
- Bereich für Nachricht oder Status

**Schritt 5: Relative hat Überblick**
Eine Angehörige kann sehen, dass die Anfrage erstellt und übernommen wurde.
Das gibt Sicherheit und Transparenz.

👉 Show:
- Relative-Ansicht / Übersicht mit Status

## 4. Architecture (02:00)

Unsere technische Architektur ist klar und modern.
Wir nutzen **Next.js** für Frontend und Backend in einem Projekt.
Für Daten nutzen wir **Prisma** mit **PostgreSQL**.
Für Login und Rollen nutzen wir **NextAuth/Auth.js**.

Der Datenfluss ist einfach:
**User → Frontend → API → Database → Response**.

Ein Beispiel:
Wenn Frau Müller eine Anfrage erstellt, sendet das Frontend die Daten an eine API-Route.
Die API prüft die Daten und die Berechtigung.
Dann speichert Prisma die Anfrage in PostgreSQL.
Am Ende kommt eine Antwort zurück, und das Dashboard zeigt den neuen Eintrag.

👉 Show:
- Architektur-Skizze
- Einfache Grafik mit Datenfluss
- Optional: Ordnerstruktur für Frontend/API/Prisma

## 5. Code Demo (03:00)

Jetzt zeige ich drei wichtige Code-Stellen.

### 5.1 Database (Prisma + PostgreSQL)
Hier sehen wir das Prisma-Schema.
Dort sind Modelle wie User, Request und vielleicht Message definiert.
Man sieht auch Relationen, zum Beispiel: Ein User kann mehrere Requests haben.

👉 Show:
- Datei mit Prisma-Schema (z. B. schema.prisma)
- Wichtige Felder: role, status, createdAt

### 5.2 Frontend Form (Create Request)
Hier ist das Formular, mit dem eine neue Anfrage erstellt wird.
Beim Klick auf „Senden“ sammeln wir die Eingaben und schicken sie an die API.

👉 Show:
- Komponente für Request-Form
- submit-Funktion / fetch-Aufruf

### 5.3 Backend Route (API Handler)
In der API-Route nehmen wir die Daten entgegen.
Wir prüfen: Ist der User eingeloggt? Sind die Pflichtfelder da?
Dann schreiben wir die Daten mit Prisma in die Datenbank.

👉 Show:
- API-Datei mit POST-Handler
- Stelle mit Prisma create()
- JSON-Response bei Erfolg/Fehler

**Interessant oder schwierig war:**
Erstens die Rollenlogik: Nicht jede Rolle darf alles machen.
Zweitens saubere Fehlerbehandlung: Der Nutzer soll immer verstehen, was passiert ist.

## 6. Learnings (02:00)

Zum Schluss unsere Learnings.

Einfacher als erwartet war das schnelle Entwickeln mit Next.js.
Wir konnten Frontend und Backend gut zusammen bauen.

Schwerer war die saubere Rechte-Logik zwischen Senior, Helper und Relative.
Auch gutes UI für ältere Menschen war nicht trivial.
Kleine Details wie Schriftgröße, Kontrast und klare Texte sind sehr wichtig.

Beim nächsten Mal würden wir verbessern:
- Mehr Usability-Tests mit echten Nutzerinnen und Nutzern
- Bessere Benachrichtigungen in Echtzeit
- Noch klarere Status-Anzeigen im Dashboard

Vielen Dank fürs Zuhören.
Ich freue mich auf Fragen.

👉 Show:
- Kurze Folie „Learnings“
- Optional: Liste „Next Steps“

---

# 🇷🇺 Русская версия

## 1. Вступление / Elevator Pitch (00:30)

Всем привет, сегодня я покажу наш проект **Oma-Netz**.
Oma-Netz — это веб-приложение, которое соединяет пожилых людей, помощников и родственников.
Многим пожилым людям нужна небольшая помощь в быту: покупки, визит к врачу, цифровые вопросы.
Наш проект решает именно эту задачу: помощь должна быть быстрой, простой и безопасной.
Целевая аудитория — три роли: Senior, Helper и Relative.

👉 Show:
- Главная страница приложения
- Название проекта и короткая идея

## 2. Планирование (02:00)

Сначала мы не писали код сразу.
Сначала мы сделали план, чтобы хорошо понять требования.
Для этого мы использовали **Excalidraw**.
Там мы нарисовали архитектуру и flow: кто куда нажимает, какая страница открывается, какие данные нужны.

Потом мы написали **User Stories**.
Это было важно, потому что у нас три разные роли.
Senior хочет быстро создать запрос.
Helper хочет видеть открытые запросы и быстро откликаться.
Relative хочет видеть общую картину и понимать, что все под контролем.

Главная идея приложения: минимум шагов, понятные кнопки, простой текст.
Приложение не должно быть сложным для пожилых пользователей.

👉 Show:
- Диаграмма Excalidraw (архитектура или user flow)
- Короткий список из 2–3 User Stories
- Роли: Senior / Helper / Relative

## 3. Демонстрация продукта (05:00)

Сейчас покажу реальный сценарий использования.
Представим: госпоже Мюллер нужна помощь с покупками.

**Шаг 1: Регистрация и вход**
Она регистрируется через e-mail и пароль.
Потом входит в систему.
Нам было важно сделать форму спокойной и понятной.

👉 Show:
- Страница Register
- Страница Login

**Шаг 2: Создание запроса**
После входа она попадает в dashboard.
Там нажимает «Новый запрос».
Пишет: «Нужна помощь с покупками сегодня в 17:00».
Потом сохраняет запрос.

👉 Show:
- Dashboard
- Форма создания запроса
- Кнопка «Создать» или «Сохранить»

**Шаг 3: Helper видит запрос**
Помощник входит в систему и видит открытые запросы.
Он находит запрос госпожи Мюллер и принимает его.

👉 Show:
- Dashboard помощника
- Список открытых запросов
- Изменение статуса: open → accepted

**Шаг 4: Коммуникация**
После принятия начинается коммуникация.
Это может быть поле сообщений или обновления статуса в самом запросе.
Обе стороны понимают, что помощь уже организована.

👉 Show:
- Страница деталей запроса
- Блок сообщения или блок статуса

**Шаг 5: Relative видит общий статус**
Родственник видит, что запрос создан и уже принят.
Это дает уверенность и прозрачность.

👉 Show:
- Экран Relative с текущими статусами

## 4. Архитектура (02:00)

Наша техническая архитектура простая и современная.
Мы используем **Next.js** для frontend и backend в одном проекте.
Для данных используем **Prisma** и **PostgreSQL**.
Для входа и ролей используем **NextAuth/Auth.js**.

Поток данных выглядит так:
**User → Frontend → API → Database → Response**.

Пример:
Когда Senior создает запрос, frontend отправляет данные в API-роут.
API проверяет данные и права доступа.
Далее Prisma сохраняет запрос в PostgreSQL.
После этого frontend получает ответ и показывает новую запись в dashboard.

👉 Show:
- Схема архитектуры
- Простая схема потока данных
- При желании: структура папок Frontend/API/Prisma

## 5. Демо кода (03:00)

Теперь покажу три важные части кода.

### 5.1 База данных (Prisma + PostgreSQL)
Здесь мы видим Prisma schema.
Там есть модели User, Request и, возможно, Message.
Также видно связи, например: один пользователь может иметь много запросов.

👉 Show:
- Файл Prisma schema (например, schema.prisma)
- Важные поля: role, status, createdAt

### 5.2 Frontend форма (Create Request)
Это форма для создания нового запроса.
При нажатии «Отправить» мы берем данные из полей и отправляем их в API.

👉 Show:
- Компонент формы запроса
- submit-функция / fetch-вызов

### 5.3 Backend route (API handler)
В API-роуте мы принимаем данные.
Проверяем: пользователь вошел? обязательные поля заполнены?
Потом сохраняем данные через Prisma в базу.

👉 Show:
- API-файл с POST handler
- Место с Prisma create()
- JSON-ответ при успехе/ошибке

**Интересные или сложные моменты:**
Первое: логика ролей, потому что не каждая роль может делать все.
Второе: понятные сообщения об ошибках, чтобы пользователь всегда понимал ситуацию.

## 6. Выводы / Learnings (02:00)

В конце коротко о выводах.

Легче, чем ожидали, была скорость разработки с Next.js.
Frontend и backend удобно собирать вместе.

Сложнее была точная логика прав между Senior, Helper и Relative.
Также непросто сделать действительно удобный интерфейс для пожилых людей.
Такие детали, как размер шрифта, контраст и простой текст, очень важны.

Что улучшим в следующий раз:
- Больше usability-тестов с реальными пользователями
- Лучшие уведомления в реальном времени
- Еще более понятные статусы в dashboard

Спасибо за внимание.
Буду рад вопросам.

👉 Show:
- Финальный слайд «Learnings»
- При желании: список «Next Steps»
