# EasyOffer — Live-code задачи Frontend Developer

**Дата:** 2026-03-21  
**Задач сохранено:** 696  

---

## 1. Исправить код

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-kod-4-2

### Задача

Произвести рефакторинг кода
App.tsx
```javascript
import React, { useState } from "react";
import "./styles.css";
import Item from "./Item";

export default function App() {
  const [count, setCount] = useState(0);
  window.addEventListener("scroll", () => {
    const { scrollY } = window;
    if (scrollY > 100) {
      const topSection = document.querySelector<HTMLDivElement>(".top-section");
      if (topSection) {
        topSection.style.position = "absolute";
        topSection.style.top = scrollY + "px";
      } else {
        return;
      }
    } else {
      const topSection = document.querySelector<HTMLDivElement>(".top-section");
      if (topSection) {
        topSection.style.position = "static";
      } else {
        return;
      }
    }
  });

  return (
    <div className="App">
      <div className="block-wrapper">
        <div className="top-section">
          <button
            onClick={() => {
              alert(count);
            }}
          >
            Show count
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            Reset count
          </button>
        </div>
        <Item
          onAdd={() => {
            setCount(count + 1);
          }}
        />
        <Item
          onAdd={() => {
            setCount(count + 1);
          }}
        />
        <Item
          onAdd={() => {
            setCount(count + 1);
          }}
        />
        <Item
          onAdd={() => {
            setCount(count + 1);
          }}
        />
        <Item
          onAdd={() => {
            setCount(count + 1);
          }}
        />
        <Item
          onAdd={() => {
            setCount(count + 1);
          }}
        />
      </div>
    </div>
  );
}

```

Item.tsx
```javascript
import React from "react";
import "./styles.css";

type Props = {
  onAdd: () => void;
};

export default function Item(props: Props) {
  return (
    <div className="block">
      <button className="btn" onClick={props.onAdd}>
        Add to cart
      </button>
    </div>
  );
}

```

---

## 2. Исправить код

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-kod-4

### Задача

Задача найти ошибки, что приложение корректно работало. Подсказка, где есть неиспользуемые импорты, это значит, что в файле удалили часть логики с ней, и нужно восстановить

App.tsx
```javascript
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { fetchTodos } from "./features/todoSlice";
import { RootState } from "./store";

const App = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  fetchTodos()

  return (
    <div>
      <AddTodoForm />
      {todoStatus === "loading" && <p>Loading...</p>}
      {todoStatus === "failed" && <p>Failed to load todos.</p>}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

```

index.tsx
```javascript
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

```

features/todoSlice.ts
```javascript
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: TodoState = {
  todos: [],
  status: "idle",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_end=10"
  );
  return response.data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: "uuidv4",
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

```

---

## 3. Вывод в консоль №1

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-2

### Задача

Что выведет консоль
```javascript
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw x })
  .then(x => console.log(x))
  .catch(err => console.log(err))
  .then(x => Promise.resolve(1))
  .catch(err => console.log(err))
  .then(x => console.log(x));

```

---

## 4. Кастомный checkbox

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kastomnyij-checkbox-1

### Задача

Сверстать кастомный checkbox. Чтобы внутри вместо галочки отображался какой-нибудь эмодзи.

---

## 5. Debounce

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/debounce-1

### Задача

Написать функцию debounce, которая принимает другую функцию и задержку (в миллисекундах). Функция debounce должна возвращать новую функцию, которая откладывает выполнение переданной функции на указанное время. Если новая функция вызывается снова в течение задержки, таймер сбрасывается.

---

## 6. Функция для получения вложенного значения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-dlya-polucheniya-vlozhennogo-znacheniya-2

### Задача

Функция принимает массив ключей и объект с произвольной вложенностью, возвращая значение по указанному пути или undefined, если хотя бы один ключ отсутствует.

---

## 7. Функция-преобразователь списка

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-preobrazovatel-spiska-1

### Задача

Функция принимает список и функцию-преобразователь, применяет её к каждому элементу и возвращает новый список с результатами преобразования.

---

## 8. Медиана двух отсортированных массивов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/mediana-dvuh-otsortirovannyih-massivov-1

### Задача

Даны два отсортированных массива чисел nums1 и nums2 размером m и n соответственно. Необходимо найти медиану объединённого массива, составленного из элементов обоих массивов.

---

## 9. Треугольник Паскаля

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/treugolnik-paskalya-1

### Задача

Реализовать функцию, которая принимает число n и возвращает n строчек треугольника Паскаля

---

## 10. Функция-строитель строк

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-stroitel-strok-1

### Задача

Функция принимает объект, где ключами являются буквы, а значениями — списки индексов. Этот объект описывает порядок расположения букв в результирующем слове. Функция должна вернуть строку, в которой каждая буква стоит на указанных в списке позициях.

---

## 11. Функция проверки на палиндром

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-proverki-na-palindrom-5

### Задача

Написать функцию проверки слова на палиндром

---

## 12. FizzBuzz

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/fizzbuzz-4

### Задача

Написать функцию, которая выводит числа от 1 до 100, но вместо чисел, кратных 3, выводит «Fizz», вместо чисел, кратных 5, — «Buzz», а если число кратно и 3, и 5, — «FizzBuzz»

---

## 13. Система бронирования клиентов для саппорта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sistema-bronirovaniya-klientov-dlya-sapporta-1

### Задача

Разработать приложение для поддержки (support), в котором все сотрудники имеют общий список клиентов. Каждый support должен иметь возможность выбрать клиента, добавляя его в свою бронь, или убрать клиента из своей брони.

---

## 14. Функция генерации рандомного цвета

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-generatsii-randomnogo-tsveta-1

### Задача

Функция создаёт и возвращает случайный цвет в виде строки(HEX).

---

## 15. Адаптивная классическая макетная сетка (Holy Grail Layout)

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/adaptivnaya-klassicheskaya-maketnaya-setka-holy-grail-layout-1

### Задача

Создать классическую многоколоночную вёрстку (Holy Grail Layout), включающую шапку, основное содержимое, две боковые колонки и подвал, с возможностью адаптации под разные размеры экранов.

---

## 16. Создание конструктора для объекта пользователя

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-konstruktora-dlya-obekta-polzovatelya-1

### Задача

Реализовать функцию-конструктор, которая принимает имя и возраст, создавая объект с соответствующими полями и значениями.

---

## 17. Функция вырезающая символ после повторения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyirezayuschaya-simvol-posle-povtoreniya-1

### Задача

Написать функцию, которая вырезает символ из строки после определенного количества повторений

---

## 18. Вызов асинхронных функций

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyizov-asinhronnyih-funktsij-1

### Задача

Вызвать функции, чтобы в консоли отобразилось 1 2 3
```javascript

const getRandomArbitrary = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

const first = () => {
    return new Promise((resolve) => {
        setTimeout(() => console.log("1"), getRandomArbitrary(0, 3) * 1000);
    });
};

const second = () => {
    return new Promise((resolve) => {
        setTimeout(() => console.log("2"), getRandomArbitrary(0, 3) * 1000);
    });
};

const third = () => {
    new Promise((resolve) => {
        setTimeout(() => console.log("3"), getRandomArbitrary(0, 3) * 1000);
    });
};

```

---

## 19. Сортировка квадратного массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-kvadratnogo-massiva-1

### Задача

Дан отсортированный массив целых чисел. Необходимо возвести каждое число в квадрат, сохранив порядок возрастания, сделав это за один проход.

---

## 20. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4-2

### Задача

Найти и исправить ошибку в коде
```html
<template>
    <div id="app">
    <FilterList :filters="filtersData" />
    </div>
</template>

<script>
import FilterList from "./components/FilterList.vue";
import filtersData from "./filters.json";

export default {
    name: "App",
    components: {
    FilterList,
    },
    }
};
</script>

</style>
# app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>

```

---

## 21. Своя реализация функции map

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-funktsii-map-1

### Задача

Реализовать метод массива map самостоятельно

---

## 22. Управляемый input

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/upravlyaemyij-input-1

### Задача

Реализовать управляемый input и получение данных из неуправляемого
```html
<div className="App">
    <input placeholder="Управляемый" />
    <input placeholder="НЕуправляемый" />
    <button>Get value</button>
</div>

```

---

## 23. Типизация функции map в TypeScript

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizatsiya-funktsii-map-v-typescript-1

### Задача

Реализовать корректную типизацию для функции map, которая принимает массив элементов одного типа и функцию преобразования, возвращая новый массив с элементами другого типа.

---

## 24. Функция объединения двух массивов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-obedineniya-dvuh-massivov-1

### Задача

Написать функцию, которая принимает два отсортированных массива чисел, объединяет их и возвращает отсортированный массив со всеми числами

---

## 25. Определение типа по action.type

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/opredelenie-tipa-po-actiontype-1

### Задача

Написать тип Action, чтобы тип payload определялся по action.type
```javascript
enum ActionType {
    one = "one",
    two = "two",
}

const reducer = <T extends ActionType>(
    state: State,
    action: Action<T>,
): State

action = { type, payload }

type Action = ?

```

---

## 26. Своя реализация debounce

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-debounce-1

### Задача

Написать свою реализацию функции debounce
```javascript

const fetchUrl = (url) => {
    console.log(`fetching ${url}...`);
}

function debounce() {

}

const fetching = debounce(fetchUrl, 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);

```

---

## 27. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26

### Задача

Найти и исправить ошибки в коде
```javascript
import React, { useState } from "react";

const initList = () => {
    return Array.from({ length: 200 }, (_el, index) => ({ value: Math.random(),
    label: `row ${index + 1}` I
    });
}

export default function App() {
    const [list] = useState(initList());
}

const handleUpdate = () => {
    list[0].value = Math.random();
};

return (
    <div>
    <h1>List App</h1>
    <Button onClick={handleUpdate}>Update "row 1"
</Button>
    {
    list.map(({ label, value }) => (
    <Row label={label} value={value} />
    });
    }
</div>
};

function Button(props) {
    const { children, onClick } = props;

    return <button onClick={onClick}>{children}</button>
}

function Row(props) {
    const {
    label, value
    } = props;

    return (
    <div style={{ marginTop: '8px' }}>
    <span style={{ marginRight: "20px" }}>{label}:</span>
    <span>{{value}</span>
    </div>
});

```

---

## 28. Функция получения данных из древовидной структуры

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-polucheniya-dannyih-iz-drevovidnoj-strukturyi-1

### Задача

Реализовать функцию, которая принимает на вход дерево и возвращает все значения листовых узлов в виде массива

---

## 29. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4-3

### Задача

```javascript
this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count
  }
})

```

---

## 30. Проверка правильности скобочной последовательности

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/proverka-pravilnosti-skobochnoj-posledovatelnosti-2

### Задача

Дана строка, содержащая только символы (), {}, []. Нужно определить, является ли она правильной скобочной последовательностью. Последовательность считается правильной, если скобки открываются и закрываются в корректном порядке, а каждая открывающая скобка имеет соответствующую закрывающую.

---

## 31. Функция, которая убирает повторяющиеся числа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-kotoraya-ubiraet-povtoryayuschiesya-chisla-1

### Задача

Функция принимает массив чисел и возвращает новый массив, содержащий только те числа, которые встречаются в исходном массиве ровно один раз.

---

## 32. Функция для получения вложенного значения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-dlya-polucheniya-vlozhennogo-znacheniya-2-2

### Задача

Функция принимает массив ключей и объект с произвольной вложенностью, возвращая значение по указанному пути или undefined, если хотя бы один ключ отсутствует.

---

## 33. Оптимизировать рендер

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/optimizirovat-render-1

### Задача

function List() {
  console.log('RENDER LIST');
  return <div>Компонент лист</div>;
}

export default function App() {
  const [state, setState] = useState(0);
  console.log('RENDER APP');
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>INCREMENT</button>
      <List />
    </div>
  );
}

---

## 34. Получение данных

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** None
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poluchenie-dannyih-2

### Задача

Нужно реализовать получение данных с данного Url.
```javascript
// https://jsonplaceholder.typicode.com/todos/1

```

---

## 35. Операции с чётными и нечётными числами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/operatsii-s-chyotnyimi-i-nechyotnyimi-chislami-1

### Задача

Функция, получает на вход два числа.
Если оба числа четные - функция возвращает их произведение.
Если оба числа нечетные - функция возвращает их сумму.
Если одно из чисел четное, а второе нечетное - функция возвращает это нечетное число.

---

## 36. Подсчёт веса отобранных товаров

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/podschyot-vesa-otobrannyih-tovarov-1

### Задача

Найти вес всех вещей, цена которых более 80 и количество менее 7.
```javascript
const food = [
  {name: "Паста «Болоньезе»", weight: 350, price: 68, quantity: 10},
  {name: "Спагетти с овощами", weight: 350, price: 56, quantity: 8},
  {name: "Пене с куриным филе", weight: 400, price: 68, quantity: 16},
  {name: "Пицца «Куриная с ананасами»", weight: 675, price: 139, quantity: 30},
  {name: "Пицца «Четыре сезона метро»", weight: 1600, price: 339, quantity: 8},
  {name: "Пицца «Итальян»", weight: 740, price: 159, quantity: 1},
  {name: "Салат «Джонатан с семгой»", weight: 230, price: 77, quantity: 41},
  {name: "Салат «Цезарь с креветкой»", weight: 230, price: 69, quantity: 5}
];

```

---

## 37. Первая дублирующая буква

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/pervaya-dubliruyuschaya-bukva-1

### Задача

Дана строка, содержащая только буквы. Нужно найти первую букву, которая встречается более одного раза, и вернуть её. Если таких букв нет, вернуть null.

---

## 38. Функции задержки выполнения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsii-zaderzhki-vyipolneniya-1

### Задача

Функция откладывает выполнение переданной колбэк-функции на заданное количество миллисекунд. Должна работать аналогично setTimeout, принимая функцию и задержку, после которой вызовет переданную функцию.

---

## 39. Минимальное количество плит для покрытия прямоугольной площади

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/minimalnoe-kolichestvo-plit-dlya-pokryitiya-pryamougolnoj-ploschadi-1

### Задача

Дана прямоугольная площадь размером n × m метров и квадратные плиты размером a × a метров. Требуется определить минимальное количество таких плит, необходимых для полного покрытия площади. Плиты нельзя ломать или дробить, и их границы должны быть параллельны границам площади. Допускается, чтобы покрытие выходило за пределы площади, но она должна быть полностью закрыта.

---

## 40. Палиндром

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/palindrom-3

### Задача

Дана строка, необходимо определить, является ли она палиндромом, то есть читается ли она одинаково слева направо и справа налево, игнорируя регистр и пробелы.

---

## 41. Заполнение объекта зеркальными ключами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zapolnenie-obekta-zerkalnyimi-klyuchami-1

### Задача

Дан объект с ключами, значения которых равны undefined. Необходимо пройтись по объекту и присвоить каждому ключу значение, равное его зеркальному представлению

---

## 42. Сбор слова по заданным индексам

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sbor-slova-po-zadannyim-indeksam-1

### Задача

Функция принимает строку и массив индексов, и формирует новое слово, выбирая буквы из исходного слова на указанных позициях в массиве.

---

## 43. Создание собственного класса EventEmitter

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-sobstvennogo-klassa-eventemitter-1

### Задача

Реализовать класс EventEmitter, который включает методы on для регистрации обработчиков событий, off для удаления обработчиков и emit для запуска событий, вызывая все соответствующие обработчики.

---

## 44. Проверка правильности скобочной последовательности

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/proverka-pravilnosti-skobochnoj-posledovatelnosti-2-2

### Задача

Дана строка, содержащая только символы (), {}, []. Нужно определить, является ли она правильной скобочной последовательностью. Последовательность считается правильной, если скобки открываются и закрываются в корректном порядке, а каждая открывающая скобка имеет соответствующую закрывающую.

---

## 45. Числовая сумма с использованием частичного применения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/chislovaya-summa-s-ispolzovaniem-chastichnogo-primeneniya-1

### Задача

Реализовать функцию sum, которая поддерживает частичное применение аргументов, позволяя вызывать её несколько раз и накапливать сумму переданных чисел. При вызове без аргументов функция должна возвращать текущую сумму.

---

## 46. Реализация собственного useCallback без массива зависимостей

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-sobstvennogo-usecallback-bez-massiva-zavisimostej-1

### Задача

Создать функцию-хук, аналогичную useCallback, но без массива зависимостей, которая будет мемоизировать переданную колбэк-функцию и возвращать её неизменной между рендерами.

---

## 47. Функция счетчик

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-schetchik-2

### Задача

Реализовать функцию, которая при каждом вызове будет увеличивать свое значение на единицу, начнем от 0. Ограничение: в глобальной области видимости доступна лишь сама функция. Как это сделать, с помощью IIFE?

---

## 48. Функция каррирования

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-karrirovaniya-1

### Задача

Функция которая превращает обычную функцию с несколькими аргументами в функцию, вызываемую последовательно, передавая по одному аргументу за раз до получения полного набора.

---

## 49. Сумма элементов массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/summa-elementov-massiva-1

### Задача

Функция, которая принимает массив чисел и возвращает сумму всех его элементов.

---

## 50. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { Component } from "react";

export default class App extends Component {
    onClick = (event) => {
        this.setState({ event });
    });

    logEvent = () => {
        console.log(this.state.event.target);
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me</button>
                <button onClick={this.logEvent}>log event</button>
            </div>
        );
    }
}

```

---

## 51. Создание хука useBooleanState для управления булевым состоянием

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-huka-usebooleanstate-dlya-upravleniya-bulevyim-sostoyaniem-1

### Задача

Реализовать хук useBooleanState, который управляет булевым состоянием, предоставляя удобные методы для его переключения, заменяя стандартное useState(false).

---

## 52. Генератор уникальных идентификаторов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/generator-unikalnyih-identifikatorov-1

### Задача

Реализовать функцию id, которая при каждом вызове возвращает следующее последовательное число, начиная с нуля.

---

## 53. Реализация метода map через reduce

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-metoda-map-cherez-reduce-1

### Задача

Реализовать функцию, которая повторяет поведение встроенного метода Array.prototype.map, используя reduce для преобразования элементов массива.

---

## 54. Реализация метода filter через reduce

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-metoda-filter-cherez-reduce-1

### Задача

Реализовать функцию, которая повторяет поведение встроенного метода Array.prototype.filter, используя reduce для фильтрации элементов массива.

---

## 55. Реализация Promise.all №1

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-promiseall-2

### Задача

Реализовать функцию Promise.all, которая принимает массив промисов и возвращает новый промис, резолвящийся в массив их результатов или реджектящийся при первом отказавшем промисе.

---

## 56. Секундомер на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sekundomer-na-react-2

### Задача

Создать компонент React, реализующий секундомер с кнопками Start и Stop, который отображает прошедшее время и останавливается при нажатии.

---

## 57. Бесполезный useCallback

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/bespoleznyij-usecallback-1

### Задача

Исправь ошибку и оптимизируй рендер
```javascript
const Button = memo(function Button({onClick}: {onClick: React.MouseEventHandler}) {
  console.log('render');
  return <button onclick={onClick}>Click me</button>
}

export default function App(){
  const [isVisible, setIsVisible] = useState(false)

  const OnClick = useCallback(() => {
    setIsVisible(!isVisible)
  }, [])

  return (
    <>
    <Button onClick={onClick}/>
    {
      isVisible && (<div>lorem ipsum</div>)
    }
    </>
  )
}

```

---

## 58. Оптимизация подписки на события окна в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** None
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/optimizatsiya-podpiski-na-sobyitiya-okna-v-react-1

### Задача

Необходимо предотвратить излишние вызовы useEffect в компоненте WindowEvent, чтобы обработчик события добавлялся и удалялся только при реальных изменениях зависимостей.
```javascript
function WindowEvent({
  event, 
  handler,
  options
}: {
  event: string;
  handler: EventListener;
  options?: EventListenerOptions;
}){
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener(event, handler, options);

    return () => {
      window.removeEventListener(event, handler, options);
    };
  }, [event, handler, options])

  return null
}  

export default function App() {
  const [isVisible, setIsVisible] = useState(false)
  const onclick = useCallback(() => {
    setIsVisible(prev => !prev)
  }, [])

  return (
    <>
    <Button onClick={onClick}/>
    <WindowEvent event="click" handler={() => console.log("click")} />
    {
      isVisible && (<div>lorem ipsum</div>)
    }
    </>
  )
}

```

---

## 59. Promise.all для двух промисов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/promiseall-dlya-dvuh-promisov-1

### Задача

Реализовать функцию, которая принимает два промиса и возвращает массив их результатов при успешном выполнении обоих или выбрасывает ошибку при первом же отклонении (реджекте).

---

## 60. Реализация Promise.all №2

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-promiseall-2-2

### Задача

Реализовать функцию Promise.all, которая принимает массив промисов и возвращает новый промис, резолвящийся в массив их результатов или реджектящийся при первом отказавшем промисе.

---

## 61. Счетчик с кнопкой в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/schetchik-s-knopkoj-v-react-1

### Задача

Создать компонент React, в котором по нажатию на кнопку увеличивается счетчик.

---

## 62. Секундомер на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sekundomer-na-react-2-2

### Задача

Создать компонент React, реализующий секундомер с кнопками Start и Stop, который отображает прошедшее время и останавливается при нажатии.

---

## 63. Функция, которая убирает повторяющиеся числа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-kotoraya-ubiraet-povtoryayuschiesya-chisla-1

### Задача

Функция принимает массив чисел и возвращает новый массив, содержащий только те числа, которые встречаются в исходном массиве ровно один раз.

---

## 64. Функция для получения вложенного значения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-dlya-polucheniya-vlozhennogo-znacheniya-2-2

### Задача

Функция принимает массив ключей и объект с произвольной вложенностью, возвращая значение по указанному пути или undefined, если хотя бы один ключ отсутствует.

---

## 65. Реализация чистых функций для создания пользователя и сложения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-chistyih-funktsij-dlya-sozdaniya-polzovatelya-i-slozheniya-1

### Задача

Необходимо преобразовать функции createUser и add в чистые функции, чтобы они не имели побочных эффектов и не изменяли внешние состояния, возвращая новые значения вместо изменения глобальных переменных.
```javascript
// 1
const generateID = () => Math.floor(Math.random() * 10000);
const createUser = (name: string, age: number) => ({ 
  id: generateID(),
  name,
  age
});
console.log(createUser("Alex", 28)); 
console.log(createUser("Alex", 28)); 
console.log(createUser ("Alex", 28));

// 2
let x = 2;
const add (y: number) => {
  x += y;
};

add(4);
console.log(x);

```

---

## 66. Получение значений объекта по ключам

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poluchenie-znachenij-obekta-po-klyucham-1

### Задача

Реализовать функцию getObjectValues, которая принимает объект и массив ключей, возвращая новый объект, содержащий только указанные ключи и их соответствующие значения, при этом новые значения должны быть доступны только для чтения.
```javascript
const user = {
  name: 'dima',
  age: 24,
  channel: 'SIBERIA CAN CODE - Frontend',
};

const nameAndChannel = getObjectValues(user, ['name', 'channel']);
console.log('@', nameAndChannel);

nameAndChannel.name = 'ne dima'; // error readonly

```

---

## 67. Извлечение значений из объектов по указанному ключу

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/izvlechenie-znachenij-iz-obektov-po-ukazannomu-klyuchu-1

### Задача

Реализовать функцию, которая принимает массив объектов и ключ, возвращая новый массив, содержащий объекты, в которых сохранены только значения по указанному ключу.
```

// ([{label: "label1", id: 1}], "label") => [{label: "label1"}]
// ([{label: "label1", id: 1}], "id") => [{id: 1}]

```

---

## 68. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-3

### Задача

Найти ошибки в коде
```javascript
 export async function getUserData(userId) {
  const user = await fetch(`/api/users/${userId}`)
  const rights = { reportStats: true, validate: true, };
  let data;
  switch (true) {
    case user.role == 'admin':
      data = {
        name: user.name,
        role: user.role,
        password: user.password,
        permissions: [],
      };

      Object.keys(rights).forEach(permission => {
        if (rights[permission]) {
          if (permission === 'reportStats') {
            data.permissions.push('report-stats')
          } else {
            data.permissions.push(permission);
          }
        }
      })
      break;
    case user.role == 'regular':
      data = {
        name: user.name,
        role: user.role,
      }
  }

  return data;
}

```

---

## 69. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-4

### Задача

Найти ошибки в коде
```javascript
 export const distributionCategories = (categoriesList, root, categoryToAdd) => {
    Object.assign(categoriesList, categoryToAdd);

    const rootLikeSet = new Set(root);

    Object.keys(categoryToAdd).map(Number).forEach((categoryId) => {
        const newCategory = categoriesList[categoryId];
        if (newCategory.level == 0) {
            rootLikeSet.add(categoryId);
        } else {
            const children = new Set(categoriesList[newCategory.parent].children);
            children.add(categoryId);
            categoriesList[newCategory.parent].children = Array.from(children);
        }
    });
    return [categoriesList, rootLikeSet];
};

```

---

## 70. Пересечение массивов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/peresechenie-massivov-1

### Задача

Написать функцию, которая принимает 2 массива уникальных чисел чисел и возвращает массив общих значений

---

## 71. Кнопка, удаляющаяся при клике

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/knopka-udalyayuschayasya-pri-klike-1

### Задача

Реализовать кнопку и логику, чтобы при клике на кнопку она удалялась и появлялось две новые кнопки

---

## 72. Сортировка массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-massiva-3

### Задача

Отсортировать массив чисел от меньшего к большему
```

let arr = [12,34,1,56,21,2,3,1]

```

---

## 73. Функции в классы

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsii-v-klassyi-1

### Задача

Переписать на классы
```javascript

 function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function() {
  return this.model + ' bike has' + this.color + ' color';
};

```

---

## 74. Заглавная буква

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zaglavnaya-bukva-1

### Задача

Написать функцию, которая принимает строку и возвращает эту же строку, но с заглавной буквы

---

## 75. Максимальное и минимальное значение

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/maksimalnoe-i-minimalnoe-znachenie-1

### Задача

Написать две функции. Первая функция принимает массив и возвращает максимальное значение, а вторая минимальное

---

## 76. Удаление дубликатов в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/udalenie-dublikatov-v-massive-1

### Задача

Реализовать удаление дубликатов из массива

---

## 77. Очистка массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ochistka-massiva-1

### Задача

Реализовать удаление всех элементов из массива

---

## 78. Сортировка нечетных чисел в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-nechetnyih-chisel-v-massive-1

### Задача

Реализовать функцию сортировки нечетных чисел массива

---

## 79. Минимальное количество плит для покрытия прямоугольной площади

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/minimalnoe-kolichestvo-plit-dlya-pokryitiya-pryamougolnoj-ploschadi-1

### Задача

Дана прямоугольная площадь размером n × m метров и квадратные плиты размером a × a метров. Требуется определить минимальное количество таких плит, необходимых для полного покрытия площади. Плиты нельзя ломать или дробить, и их границы должны быть параллельны границам площади. Допускается, чтобы покрытие выходило за пределы площади, но она должна быть полностью закрыта.

---

## 80. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4-4

### Задача

Найти и исправить ошибку в коде
```javascript
 const obj = {
    a: 42,
    say: function () {
        setTimeout(function () {
            console.log(this.a);
        }, 1000);
    }
}

obj.say();

```

---

## 81. Сортировка массива по количеству дубликатов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-massiva-po-kolichestvu-dublikatov-1

### Задача

Написать функцию, которая принимает массив строк и возвращает массив уникальных элементов, отсортированных по количеству дубликатов во входном массиве

---

## 82. Функция умножения на 2

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-umnozheniya-na-2-1

### Задача

Написать функцию, которая может принимать неограниченное количество чисел и возвращает массив этих чисел умноженных на 2

---

## 83. Каррированная функция сложения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/karrirovannaya-funktsiya-slozheniya-3

### Задача

Написать функцию сложения двух чисел с помощью каррирования

---

## 84. Каррированная функция сложения неограниченного количества чисел

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/karrirovannaya-funktsiya-slozheniya-neogranichennogo-kolichestva-chisel-1

### Задача

Написать функцию сложения неограниченного количества чисел с помощью каррирования

---

## 85. Функция высшего порядка

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyisshego-poryadka-1

### Задача

Реализовать функцию, которая с помощью каррирования принимает три параметра: callback функцию и два числа, и возвращает результат выполнения callback функции с двумя числами в качестве входных параметров

---

## 86. Отображение списка горизонтально

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/otobrazhenie-spiska-gorizontalno-1

### Задача

Отобразись список горизонтально
```html
 <ul>
    <li>Item1</li>
    <li>Item2</li>
    <li>Item3</li>
    <li>Item4</li>
    <li>Item5</li>
</ul>

```

---

## 87. Функция дублирования значений массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-dublirovaniya-znachenij-massiva-1

### Задача

Реализовать функцию, которая принимает массив и возвращает массив со всеми зачениями исходного массива повторенными дважды

---

## 88. Делегирование событий

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/delegirovanie-sobyitij-1

### Задача

Реализовать список на основе массива строк. При клике на элемент списка в блоке <div id="content"> должен отображаться соответствующий текст из массива.

---

## 89. Копирование объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kopirovanie-obekta-2

### Задача

Реализовать функцию, которая принимает объект и возвращает новую копию этого объекта

---

## 90. Изоморфная функция сложения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/izomorfnaya-funktsiya-slozheniya-1

### Задача

Реализовать функцию сложения двух чисел, которая может принимать параметры как в обычном виде, так и каррированием

---

## 91. Функция возвращающая расширение файла

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vozvraschayuschaya-rasshirenie-fajla-1

### Задача

Реализовать функцию, которая принимает название файла в виде строки и возвращает его расширение

---

## 92. Максимальная глубина DOM

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/maksimalnaya-glubina-dom-1

### Задача

Реализовать функцию, которая принимает DOM элемент и возвращает его максимальный уровень вложенности

---

## 93. Счастливые числа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/schastlivyie-chisla-1

### Задача

Реализовать функцию, которая принимает строку чисел, и возвращает счастилвое число. Счастливое число - это число N, которое встретилось N раз в строке. В случае если счастливое число не найдено, нужно вернуть 0

---

## 94. Предстваление параметров URL строки в виде объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/predstvalenie-parametrov-url-stroki-v-vide-obekta-1

### Задача

Реализовать функцию, которая принимает URL и возвращает параметры строки в виде объекта
```javascript
 const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark";

function queryObjectify(str) {

}

queryObjectify(inData)

/*
{
    'user': {
        'name': {
            'firstname': 'Bob',
            'lastname': 'Smith'
        },
        'favoritecolor': 'Light Blue'
    },
    experiments: {
        theme:'dark'
    }
}
*/

```

---

## 95. Функция счетчик

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-schetchik-2

### Задача

Реализовать функцию, которая при каждом вызове будет увеличивать свое значение на единицу, начнем от 0. Ограничение: в глобальной области видимости доступна лишь сама функция. Как это сделать, с помощью IIFE?

---

## 96. Поочередный вызов асинхронных функций

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poocherednyij-vyizov-asinhronnyih-funktsij-1

### Задача

Реализовать функцию, которая принимает массив асинхронных функций и выполняет их по очереди

---

## 97. Население городов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/naselenie-gorodov-1

### Задача

Написать функцию, которая принимает население в виде числа и возвращает города из массива, население которых больше, чем переданное значение
```javascript
 const cities = [
    {city: 'Kyiv', population: 6_000_000},
    {city: 'Tokyo', population: 13_000_000},
    {city: 'New York', population: 22_000_000},
    {city: 'London', population: 17_000_000}
]

```

---

## 98. Отслеживание выполнения Promise

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/otslezhivanie-vyipolneniya-promise-1

### Задача

Написать функцию, которая принимает массив Promise и выводит в консоль "all done", когда все Promise завершат работу

---

## 99. Таймер на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tajmer-na-react-1

### Задача

Реализовать таймер с двумя кнопками start и stop
```javascript
 function Timer() {
    return (
        <div>
            <button>Start</button>
            <button>Stop</button>
            <div>0</div>
        </div>
    );
}

export default function App() {
    return <Timer />;
}

```

---

## 100. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { Component } from "react";

export default class App extends Component {
    onClick = (event) => {
        this.setState({ event });
    });

    logEvent = () => {
        console.log(this.state.event.target);
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me</button>
                <button onClick={this.logEvent}>log event</button>
            </div>
        );
    }
}

```

---

## 101. Вывод списка пользователей

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-spiska-polzovatelej-1

### Задача

Реализовать верстку для вывода на экран списка пользователей. Каждый пользователь имеет следующие атрибуты: аватар, имя, страна, пол, статус онлайн, рейтинг, сокращенное описание с возможностью раскрыть блок с полным текстом

---

## 102. Подключение шрифтов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/podklyuchenie-shriftov-1

### Задача

```css
 Front tranity name -> 'some awesome web font'
Front variants: regular, bold, regular italic, bold italic

@font-face {

    src: ur1('.wot');
    src: ur1('.woff2') format("woff2")
    ur1('.woff') format("woff");
    ur1('.svg') format("svg");
    ur1('.tcf') format("truetype");

```риациях: regular, bold, regular italic, bold italic

---

## 103. Одноразовая функция

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/odnorazovaya-funktsiya-1

### Задача

Реализовать функцию с помощью замыкания, которая может быть вызвана только 1 раз, а в последующие вызовы будет возвращать undefined

---

## 104. Максимальное число в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/maksimalnoe-chislo-v-massive-1

### Задача

Написать функцию поиска максимального числа в массиве

---

## 105. Поиск удаленного числа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-udalennogo-chisla-2

### Задача

Дан неотсортированный массив чисел от 1 до 100, но одного числа нет. За минимальное количество итераций найти удаленное число

---

## 106. Поиск единственного неповторяющегося числа в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-edinstvennogo-nepovtoryayuschegosya-chisla-v-massive-1

### Задача

Дан массив чисел, в котором каждое значение встречается ровно два раза, кроме одного уникального элемента, который встречается только один раз. Необходимо найти это уникальное число за линейное время.

---

## 107. Максимальная сумма непрерывного подмассива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/maksimalnaya-summa-nepreryivnogo-podmassiva-1

### Задача

Требуется найти такой непрерывный подмассив в заданном массиве чисел, сумма элементов которого максимальна. Вернуть именно сумму. Если все элементы массива отрицательные возвращаем ноль.

---

## 108. Преобразование массива пар "имя-значение" в объект

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/preobrazovanie-massiva-par-imya-znachenie-v-obekt-1

### Задача

Дан массив объектов, каждый из которых содержит поля name и value. Необходимо преобразовать этот массив в объект, где ключами будут значения из name, а соответствующими значениями — значения из value.
```javascript
// Пример
var arr = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }];
// Вывод {width: 10, height: 20}

```

---

## 109. Каррированная функция суммы двух чисел

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/karrirovannaya-funktsiya-summyi-dvuh-chisel-1

### Задача

Функция, которая вызывается последовательно с двумя аргументами и возвращает их сумму.

---

## 110. Поиск элементов, встречающихся более одного раза

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-elementov-vstrechayuschihsya-bolee-odnogo-raza-1

### Задача

Дан массив чисел. Необходимо вернуть список всех элементов, которые встречаются в массиве более одного раза, без повторений в результирующем списке.

---

## 111. Отображение вложенного списка на основе иерархической структуры

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/otobrazhenie-vlozhennogo-spiska-na-osnove-ierarhicheskoj-strukturyi-1

### Задача

Дан список элементов с указанием родительских идентификаторов, формирующих иерархическую структуру. Необходимо отобразить элементы в виде вложенного списка, отражающего эту иерархию.
```javascript
const First = () => {
  const ListData = [
    { id: 1, name: 'Element 1', parentId: null },
    { id: 2, name: 'Element 2', parentId: 1 },
    { id: 3, name: 'Element 3', parentId: 2 },
    { id: 4, name: 'Element 4', parentId: 3 },
    { id: 5, name: 'Element 5', parentId: 2 },
  ];

  return (
    <ul>
      <li>Element 1</li>
    </ul>
  );
};

```

---

## 112. Формирование уникальной строки из непросроченных записей с учётом порядка

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/formirovanie-unikalnoj-stroki-iz-neprosrochennyih-zapisej-s-uchyotom-poryadka-1

### Задача

Дана коллекция объектов, содержащих строку value, числовое поле order и булевое поле expired. Необходимо сформировать строку, состоящую из символов всех непросроченных записей, отсортированных по order, где символы каждой строки добавляются в обратном порядке. В итоговую строку включаются только уникальные символы, без повторений.
```javascript
const input = [
  { value: 'abcd', order: 4, expired: false },
  { value: 'qwer', order: 2, expired: true },
  { value: 'xyz1', order: 1, expired: false },
  { value: 'abx2', order: 3, expired: false },
];

let result = () => {};

console.log(result); //1zyx2badc

```

---

## 113. Оптимизация кода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/optimizatsiya-koda-2-2

### Задача

Оптимизировать код
```javascript
const heavyFunc = count => {
  return Math.floor(Math.random() * count);
};

const LazyInit = props => {
  const [count, setCount] = useState(heavyFunc(props.count));
  return (
    <>
      {count}
      <button onClick={() => setCount(prevProps => ++prevProps)}>Increment</button>
    </>
  );
};

```

---

## 114. Ограничение ключей функции значениями ключей объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ogranichenie-klyuchej-funktsii-znacheniyami-klyuchej-obekta-1

### Задача

Необходимо реализовать функцию, принимающую объект и строковое значение ключа, с проверкой на этапе компиляции, что переданный ключ действительно существует в объекте. При передаче несуществующего ключа должна возникать ошибка компиляции.
```javascript
const X = { a: 1, b: 2, c: 3, d: 4 };

function getProperty(obj, key) {
  return obj[key];
}

getProperty(X, 'a');
getProperty(X, 'm'); //error

```

---

## 115. Остановка всплытия события клика

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ostanovka-vsplyitiya-sobyitiya-klika-1

### Задача

Остановить вывод "Outer clicked", если пользователь кликнул на div с классом inner
```javascript
export const Square = () => {
  const onClick = () => {
    console.log('Outer clicked');
  };

  return (
    <div className="outer" onClick={onClick}>
      <div className="inner">Hello</div>
    </div>
  );
};

```

---

## 116. Синхронизация состояния ввода между вкладками браузера

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sinhronizatsiya-sostoyaniya-vvoda-mezhdu-vkladkami-brauzera-1

### Задача

В приложении необходимо обеспечить синхронизацию введённого текста в инпуте между несколькими открытыми вкладками браузера, чтобы изменения, внесённые в одном инпуте, автоматически отображались в аналогичных инпутах на других вкладках.
```javascript
function App() {
  const [title, setTitle] = useState('');

  const updateTitle = (title: string) => {
    setTitle(title)
  }

  return (
    <div className="app">
      <input onChange={(event) => updateTitle(event.target.value)}>
    </div>
  );
}

```

---

## 117. Функция удаления дубликатов в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-udaleniya-dublikatov-v-massive-2

### Задача

Дан массив чисел. Написать функцию удаления дубликатов. Сложность алгоритма должна быть линейная O(n)

---

## 118. Функция переворачивания слов в строке

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-perevorachivaniya-slov-v-stroke-1

### Задача

Дана строка "Welcome to this Javascript Guide!". Написать функцию, которая будет переворачивать слова на месте. На выходе должно быть "emocleW ot siht tpircsavaJ !ediuG"

---

## 119. Вывод в консоль №2

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-3

### Задача

Определить, что будет выведено в консоль и объяснить почему
```javascript
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
console.log(4);

```

---

## 120. Вывод в консоль №3

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-4

### Задача

Определить, что будет выведено в консоль
```javascript
const promise = new Promise((resolve) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);

```

---

## 121. Определение минимального времени выполнения асинхронных функций

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/opredelenie-minimalnogo-vremeni-vyipolneniya-asinhronnyih-funktsij-1

### Задача

Даны три функции. Асинхронные функции add1() и add2() делают операцию сложения по разному. Определить за какое минимальное время выполнятся функции add1() и add2()
```javascript
function resolveAfter2Seconds(x) {
  return bew Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

async function add2(x) {
  const promise_a = resolveAfter2Seconds(20);
  const promise_b = resolveAfter2Seconds(30);
  return x + (await promise_a) + (await promise_b);
}

add1(10).then(console.log);
add2(20).then(console.log);

```

---

## 122. Функция мемоизации

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-memoizatsii-2

### Задача

Написать функцию memo(), которая на вход принимает функцию и возвращает тоже функцию. Функция memo() должна мемоизировать значение выполнения функции с одним и тем же аргументом.
```javascript
const pow = (a) => a * a

const memo = (fn) => {}

const memoized = memo(pow)

memoized(4)

```

---

## 123. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-5

### Задача

Найти и исправить ошибки в коде
```javascript
import "./styles.css";
import React, { useState } from "react";
import Item from "./Item";

type SomeDTO = { id: number };

export default function App() {
  const [list, setList] = useState<SomeDTO[]>([{ id: 1 }, { id: 2 }]);

  const handleReverseClick = () => {
    setList((old) => old.reverse());
  };

  return {
    <div className="App">
      <h1>I have a bug, click on any item first and then reverse list</h1>

      <ul>
        {list.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
      <button onClick=(handleReverseClick)>Click me to reverse a list</button>
    </div>
  };
}

```

---

## 124. Вывод в консоль №4

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-5

### Задача

Что выведет консоль
```javascript
var object = {
  data: 'Some Data',
  foo: function foo() {
    console.log(this.data);

    function bar() {
      console.log(this.data);
    }

    bar();
  }
};

object.foo();

```

---

## 125. Вывод в консоль №5

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-6

### Задача

Что выведет консоль
```javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

new Promise((resolve, reject) => {
  console.log('4');
  setTimeout(() => {
    console.log('5');
    resolve('6');
  }, 0);
}).then(result => {
  console.log('7');
  setTimeout(() => {
    console.log(result);
  }, 0);
});

```

---

## 126. Условные типы в TypeScript

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/uslovnyie-tipyi-v-typescript-1

### Задача

Написать условные типы на TypeScript
```go
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

```

---

## 127. Функция счетчик

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-schetchik-2

### Задача

Реализовать функцию, которая при каждом вызове будет увеличивать свое значение на единицу, начнем от 0. Ограничение: в глобальной области видимости доступна лишь сама функция. Как это сделать, с помощью IIFE?

---

## 128. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-6

### Задача

Найти ошибки в коде
```javascript
import "./styles.css";
import React from "react";
import orderBy from "lodash/orderBy";

const ascIcon = "↑";
const descIcon = "↓";

/*
 * Компонент отрисовывающий элементы списка и их квадратное значение,
 * Кнопка add должна добавлять значение в массив
 * Кнопка delete должна удалять значение из массива
 *
 * Задание — поменять функционал
 * Доп. задание: Получать над символикой title.
 * Доп. задание: Подсчёт квадратичной суммы.
 */

export default function App() {
  let array = [1, 2, 3, 4, 5, 6];

  const [sortDirection, setSortDirection] = React.useState<any>("asc");
  const [inputValue, setInputValue] = React.useState("");
  let sum = 0;

  array.map(i => (sum += i));

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleAddItem = () => {
    array.push(Number(inputValue));
  };

  const handleRemoveItem = (id: number) => {
    array = array.filter((item) => item !== id);
  };

  const handleChangeSort = () => {
    const newSorting = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSorting);
  };

  return (
    <div className="App">
      <input value={inputValue} onChange={handleChangeInput} />
      <button onClick={handleAddItem}>Add</button>

      <button onClick={handleChangeSort}>
        {sortDirection === "asc" ? ascIcon : descIcon}
      </button>

      {orderBy(array, undefined, sortDirection).map((i) => {
        return (
          <div key={i}>
            {i} {i * i}
            <button onClick={() => handleRemoveItem(i)}>delete</button>
          </div>
        );
      })}

      <span>Общая сумма элементов: {sum}</span>
    </div>
  );
}

```

---

## 129. Функция вычисления возраста с помощью Function Declaration

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyichisleniya-vozrasta-s-pomoschyu-function-declaration-1

### Задача

Написать функцию getAge(), которая входящим аргументом принимает дату рождения и возвращает возраст. Функция должна быть создана с помощью Function Declaration

---

## 130. Функция вычисления возраста с помощью Function Expression

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyichisleniya-vozrasta-s-pomoschyu-function-expression-1

### Задача

Написать функцию getAge(), которая входящим аргументом принимает дату рождения и возвращает возраст. Функция должна быть создана с помощью Function Expression

---

## 131. Функция setTimeout()

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-settimeout-1

### Задача

Написать функцию setTimeout(), которая первым аргументом принимает стрелочную функцию и запускается через 400мс. Функция, которая передается первым аргументом должна выводить в консоль слово "Hello"

---

## 132. Удаление элемента массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/udalenie-elementa-massiva-1

### Задача

Написать удаление четвертого элемента массива тремя способами и вывести в консоль обновленный массив
```javascript
const arr = [1, 2, 3, 44, 55, 66];

```

---

## 133. Вычисление суммы элементов массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyichislenie-summyi-elementov-massiva-1

### Задача

Вычислить сумму элементов массива с помощью reduce()
```javascript
const arr = [1, 2, 3, 44, 55, 66]

```

---

## 134. Передача аргументов в функцию через запятую

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/peredacha-argumentov-v-funktsiyu-cherez-zapyatuyu-1

### Задача

Функция get3(arr) принимает входящим аргументом массив. Написать способ передачи аргументов в функцию через запятую
```javascript
function get3(arr) {
  return arr.reduce((acc, item) => {
    console.log(1);
  });
}

console.log(get3(arr));

```

---

## 135. Объединение массивов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obedinenie-massivov-1

### Задача

Объединить массивы не используя встроенный метод concat()
```javascript
const arr = [1, 1, 1, 1, 1, 1];
const arr2 = [77, 88, 99];

```

---

## 136. Деструктуризация элементов массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/destrukturizatsiya-elementov-massiva-1

### Задача

Написать способ вызова функций, которые являются элементами возвращаемого массива
```javascript
function get() {
  return [
    () => { console.log('Hello') },
    () => { console.log('Hello_2') }
  ]
}

```

---

## 137. Вывод в консоль №6

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-7

### Задача

Определить какое значение index будет выведено в консоль
```javascript
function get() {
  const index = 'cat';
  return {
    fn1: () => { console.log(index) },
    fn2: () => { console.log('Hello_2') }
  }
}

const { fn1: a, fn2: b } = get();

console.log(a());

```

---

## 138. Вывод в консоль №7

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-8

### Задача

Что будет выведено в консоль
```javascript
console.log(h);
var h = 9;

```

---

## 139. Вывод в консоль №8

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-9

### Задача

```javascript
hello();
hello2();

function hello() {
  console.log('Привет!');
}

const hello2 = () => {
  console.log('Привет!');
}

```Что будет выведено в консоль

---

## 140. Функция суммирования элементов массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-summirovaniya-elementov-massiva-1

### Задача

Написать функцию суммирования элементов массива любым известным способом
```javascript
const arr = [1, 2, 3, 4, 5]

```

---

## 141. Деструктуризация свойств объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/destrukturizatsiya-svojstv-obekta-1

### Задача

Написать деструктуризацию свойств объекта
```javascript
let user = {
  name: 'Igor',
  age: 19,
  city: 'Petersburg'
}

```

---

## 142. Реализация бесконечного скролла для загрузки постов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-beskonechnogo-skrolla-dlya-zagruzki-postov-1

### Задача

В приложении, отображающем список постов, необходимо реализовать функциональность бесконечного скролла, при которой новые посты подгружаются и добавляются к уже отображаемым при прокрутке страницы вниз.
```javascript
const generatePosts = () => {
  return Array(10)
    .fill(null)
    .map((_, i) => {
      return { name: `Post-${i}`, id: Math.random() * 10000 };
    });
};

function App() {
  const [posts, setPosts] = useState<Post[]>(generatePosts());

  return (
    <div className="app">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          {post.name}
        </div>
      ))}
    </div>
  );
}

```

---

## 143. Парсинг типа Concat в TypeScript

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/parsing-tipa-concat-v-typescript-1

### Задача

Парсить тип Concat
```javascript
/* _____________ Your Code Here _____________ */

type Concat<T, U> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = [1] as const

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '6']>, ['1', 2, '3', false, boolean, '6']>>,
]

// @ts-expect-error
type error = Concat<null, undefined>

```

---

## 144. Типизация двух функций

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizatsiya-dvuh-funktsij-1

### Задача

Есть ли разница в типизации этих двух функций
```javascript
const a = (arg?: string) => {
  console.log(arg);
}

const b = (arg: string | undefined) => {
  console.log(arg);
}

```

---

## 145. Своя реализация map

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-map-3

### Задача

Написать свою реализацию метода map

---

## 146. Функция проверки на палиндром

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-proverki-na-palindrom-5-2

### Задача

Написать функцию, которая принимает строку и проверяет является ли она палиндромом. При этом пробелы и знаки препинания не должны учитываться

---

## 147. Список контактов на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/spisok-kontaktov-na-react-1

### Задача

Реализовать React-приложение для управления списком контактов. Необходимо отображать список контактов, каждый из которых содержит имя и номер телефона. Добавление нового контакта в список происходит при вводе данных в два input и нажатии на кнопку "add"
```javascript
 const ContactList = () => {
    return (
    <div>
    <h1>Contact List</h1>
    <div>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Phone" />
    <button>Add</button>
    </div>
    </div>
});

export default ContactList;

```

---

## 148. Расположение элемента по центру окна браузера

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/raspolozhenie-elementa-po-tsentru-okna-brauzera-2

### Задача

Расположить квадрат по центру окна браузера
```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie-edge" />
    <title>HTML + CSS</title>
    <link rel="stylesheet" href="styles.css" />
    </head>
<body>
    <div class="hi">Hil</div>
    </body>
</html>

```

---

## 149. Своя реализация map

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-map-3-2

### Задача

Написать свою реализацию метода map

---

## 150. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { Component } from "react";

export default class App extends Component {
    onClick = (event) => {
        this.setState({ event });
    });

    logEvent = () => {
        console.log(this.state.event.target);
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me</button>
                <button onClick={this.logEvent}>log event</button>
            </div>
        );
    }
}

```

---

## 151. Вывод в консоль №38

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-10

### Задача

Определить что будет выведено в консоль
```javascript
 const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());

```

---

## 152. Вывод в консоль №39

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-11

### Задача

Определить что будет выведено в консоль
```javascript
 function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

const member = new Person('Example1', 'Example2');
Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());
// ??

```

---

## 153. Вывод в консоль №40

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-12

### Задача

Определить что будет выведено в консоль
```javascript
 async function getData() {
    return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data); //

```

---

## 154. Вывод в консоль №41

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-13

### Задача

Определить что будет выведено в консоль
```javascript
 async () => {
    try {
    console.log(await myPromise);
    } catch {
    throw new Error('Oops didn't work');
    } finally {
    console.log('Oh finally!');
    }
}

```

---

## 155. Функция проверки на палиндром

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-proverki-na-palindrom-5-4

### Задача

Написать функцию isPalindrom, которая принимает строку определяет, является ли она палиндромом. При этом пробелы, знаки препинания и регистр не должны учитываться

---

## 156. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-7

### Задача

Найти и исправить ошибки в коде
```javascript
 export default function Counter() {
    let count = 0;
}

const changeCount = () => {
    count += 1;
};

return {
    <div>
    <div>Count = {count}</div>

    <button onClick={changeCount}-Knomsa</button>
    </div>
};
}

```

---

## 157. Получение данных из input

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poluchenie-dannyih-iz-input-1

### Задача

Вывести значения полей в консоль, учитывая что один из input контроллируемый, а второй нет
```javascript
 import "./styles.css";
import Inputs from "./inputs";

export default function App() {
    return {
    <div className="App">
    <section>
    ch2-Inputs</h2>
    }
    <p>
    Вывести значения полей в консоль, при клинке на форму, учитывая что первый input controlled, а второй input uncontrolled.
    </p>
    </inputs />
    </section>
    </div>
};

```

---

## 158. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-8

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { useState } from "react";
import "./styles.css";

interface Todo {
    id: number;
    value: number;

}

const defaultData: Todo[] = [
{
    id: 1,
    value: 111,
    },
    {
    id: 2,
    value: 222,
    },
    {
    id: 3,
    value: 333,
    },
};

export const Numbers = {} => {
    const [data, setData] = useState(() => defaultData);
    const [value, setValue] = useState("");


return {
    <h2=Numbers</h2>
    <div className="list">
    [data.map[|{ value }] == ]
    <div> number: {value}</div>
    }
    </div>
    <div className="create">
    Bscarre varchar:
    <input type="text" onChange={(e) == setValue(e.target.value)} />
    <div [
    className="button"
    onClick=[]] == {
    netData[|...data, { id: data.length++, value: Number(value) }]];
    SetValue(''');
    }
    >
    Cosдать
    </div>
    </div>

```

---

## 159. Минимальное количество плит для покрытия прямоугольной площади

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/minimalnoe-kolichestvo-plit-dlya-pokryitiya-pryamougolnoj-ploschadi-1

### Задача

Дана прямоугольная площадь размером n × m метров и квадратные плиты размером a × a метров. Требуется определить минимальное количество таких плит, необходимых для полного покрытия площади. Плиты нельзя ломать или дробить, и их границы должны быть параллельны границам площади. Допускается, чтобы покрытие выходило за пределы площади, но она должна быть полностью закрыта.

---

## 160. Сжатие строки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/szhatie-stroki-2

### Задача

Дана строка, содержащая буквы //A-Z//: "AAAABBBCCXYZDDDEEFFFFAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBB". Нужно написать функцию RLE, которая выведет строку вида: "A4B3C2XYZDAE3F3 328"
Примечания:
1. Если символ встречается один раз, он остается неизменным
2. Если символ встречается более одного раза, к нему добавляется число повторений
```javascript
 function rle(str) {
    // your code here
}

rle('A') // A
rle('AAAAB') // A3B
rle('ABCCC') // ABC3

```

---

## 161. Функция устойчивого GET-запроса

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-ustojchivogo-get-zaprosa-1

### Задача

Необходимо написать функцию, которая на вход принимает url, асинхронно ходит по этому урлу GET запросом и возвращает данные (json). Для получения данных использовать fetch. Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз. Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".
```javascript

 function get(url) {
    // your code here
}

get(url)
.then(res => console.log(res))
.catch(err => console.error(err))

```

---

## 162. Монотонный ли массив

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/monotonnyij-li-massiv-1

### Задача

Написать функцию, которая принимает массив чисел. Необходимо определить монотонный он или нет.
```javascript
 function isMonotonic(numbers) {
    // your code here
}

isMonotonic([1, 2, 3, 6]); // true  
isMonotonic([6, 3, 3, 2, 1]); // true  
isMonotonic([1, 1, 1]); // true  
isMonotonic([1, 10, 6]); // false

```

---

## 163. Слияние двух массивов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sliyanie-dvuh-massivov-1

### Задача

Есть два сервиса которые возвращают список активных заявок на кредит отсортированных по возрастанию id, id - сквозное для обоих сервисов, необходимо получить список из k последних заявок на кредит:
```javascript

 const getDecisions1 = [
    {id: 1, result: 'approved'},
    {id: 3, result: 'waiting'},
    {id: 15, result: 'approved'},
    {id: 20, result: 'approved'},
    {id: 26, result: 'waiting'},
    {id: 30, result: 'approved'},
];

const getDecisions2 = [
    {id: 2, result: 'approved'},
    {id: 4, result: 'waiting'},
    {id: 14, result: 'approved'},
    {id: 16, result: 'approved'},
    {id: 23, result: 'waiting'},
    {id: 32, result: 'approved'},
];

const getLastDecision - (decision1, decision2, k) -> {
}

getLastDecision(getDecisions1.getDecisions2, 5) //

//[ 
// {id: 32, result: 'approved'},
// {id: 30, result: 'approved'},
// {id: 26, result: 'waiting'},
// {id: 23, result: 'waiting'},
// {id: 20, result: 'approved'}

```

---

## 164. Поиск двух чисел в массиве, сумма которых равна аргументу

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-dvuh-chisel-v-massive-summa-kotoryih-ravna-argumentu-1

### Задача

Дана коллекция чисел, необходимо реализовать функцию, которая находит в ней пару чисел, составляющие заданную сумму. Надо решать за линейную сложность
```javascript
 const hasPairWithSum = (arr, sum) => {}

hasPairWithSum([3, 4, 7, 10], 8); // false
hasPairWithSum([1, 4, 4, 9], 8); // true
hasPairWithSum([-8, 1, 4, 9, 16], 8); // true

```

---

## 165. Функция автокаррирования

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-avtokarrirovaniya-1

### Задача

Реализовать функцию автокаррирования
```javascript
 const taskChain = (task1, task2, task3) => {
    console.log(task1, task2, task3);
};

const curriedTaskChain = curry(laskChain);

curriedTaskChain()()()(1, 2, 3);  
curriedTaskChain()()()(2)(3);  
curriedTaskChain(1, 2, 3);  
curriedTaskChain(1)()(2, 3);

```

---

## 166. Функция сравнения массивов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-sravneniya-massivov-1

### Задача

Написать функцию, которая проверяет равны ли элементы массива
```javascript
 //isSimilar([0,1,2], [2,1,0]) === true
// isSimilar([0,1], [2,1,0]) === false
// isSimilar([0,5,1], [0,1,5]) === true

isSimilar(arr1, arr2)

function issimilar(arr1, arr2) {

}

```

---

## 167. Вывод в консоль №42

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96

### Задача

Определить что будет выведено в консоль
```javascript
 var i = 10;
var array = [];

while (i--) {
    array.push(function() {
    return i + 1;
    });
}

console.log([
    array[0](), // ???
    array[1](), // ???
]);
}

```

---

## 168. Вывод в консоль №43

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-14

### Задача

Определить что будет выведено в консоль
```javascript
 console.log('apple');

setTimeout(() => console.log('pear'), 0);

Promise.resolve('melon').then(res => console.log(res));

new Promise((resolve, reject) => {
    console.log('orange');
    resolve('pineapple');
}).then(res => console.log(res));

console.log('line');

```

---

## 169. Функция шпион

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-shpion-1

### Задача

Написать функцию spy, которая умеет следить за другой функцией. Она должна принимать на вход функцию и имитировать ее работу. Но помимо этого также должны добавиться параметры data.args и data.results
```javascript
 function _sum(a, b) {
    return a + b
}

function spy(f) {
    // ТУТ ПИШЕМ КОД
}

const sum = spy(_sum)

console.log(sum(2, 2)) // 4  
console.log(sum(21, 21)) // 42  
/* КОЛИЧЕСТВО ВЫЗОВОВ ФУНКЦИИ _sum */  
console.log(sum.data.calls) // 2  
/* ВРЕМЕНИ С КОТОРЫМИ была вызвана функция _sum, с сохранением порядка вызовов */  
console.log(sum.data.args) // [(2, 2], [21, 21])  
/* результаты, которые вернула функция _sum, с сохранением порядка вызовов */  
console.log(sum.data.results) // [4, 42]

```

---

## 170. Реализация класса EventEmitter

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-klassa-eventemitter-1

### Задача

Реализовать класс EventEmitter с двумя методами: измененный addEventListener, возвращающий функцию которая отписывает элемент от слушателя и dispatchEvent
```javascript

 //  
type Payload = any;  
type RemoveEventListener = () => void;  
type EventListener = (payload?: Payload) => void | Promise<void>;  

interface IEventEmitter {  
    // Подписывает слушатель к событию event,  
    // Возвращает функцию, вызов которой отписывает слушатель от события event  
    addEventListener(event: string, listener: EventListener): RemoveEventListener;  

    // Вызывает всех слушателей, привязанных к событию event  
    // При вызове слушателя дополнительным аргументом может быть передан payload (произвольные дi-dispatchEvent(event: string, payload?: Payload): void;  

    */  

class EventEmitter {}

// Создаем инстанс EventEmitter  
const button = new EventEmitter();  

// Подписываем слушатели к событию 'click'  
const removeHandleClick1 = button.addEventListener('click', () => console.log('called on click const removeHandleClick2 = button.addEventListener('click', () => console.log('called on click const removeHandleClick3 = button.addEventListener('click', () => console.log('click'));  

// Подписываем слушатель к событию 'hover'  
const removeHandleHover = button.addEventListener('hover', (payload) => console.log('called on click const removeHandleHover');  

// Оповещаем всех слушателей о наступлении события 'click'  
button.dispatchEvent('click'); // called on click 1, called on click 2  

// Оповещаем всех слушателей о наступлении события 'hover'  
button.dispatchEvent('hover', 1); // called on hover 1  

// Отписываем все слушатели  
removeHandleClick1();  
removeHandleClick2();  
removeHandleHover();  

// Пытаемся снова оповестить всех слушателей о наступлении событий 'click' и 'hover'  
button.dispatchEvent('click'); // Оборботчики не вызвались  
button.dispatchEvent('hover'); // Оборботчики не вызвались  

```

---

## 171. Функция капитализации первой буквы

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-kapitalizatsii-pervoj-bukvyi-1

### Задача

Написать функцию, которая принимает строку и делает первую букву заглавной, а остальные маленькими

---

## 172. Глубокая копия объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/glubokaya-kopiya-obekta-1

### Задача

Глубокая копия объекта, включая все вложенные свойства и методы, с учетом особенностей:
Объект содержит примитивы, массив и метод
Метод onClick использует this
Копия должна быть независимой от исходного объекта
```javascript
const obj = {
    name: 'Ivan',
    surname: 'Ivanov',
    hobbies: ['gym', 'video games', 'pubs'],
    onClick: this.handleClick,
};

```

---

## 173. Функции debounce для отложенного выполнения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsii-debounce-dlya-otlozhennogo-vyipolneniya-1

### Задача

Функцию debounce, которая:
Принимает функцию fn и время задержки timeout
Возвращает новую функцию, выполняющую fn только если с момента последнего вызова прошло timeout мс
Если функция вызывается повторно раньше, чем истечет timeout, таймер сбрасывается
```javascript
function debounce(fn, timeout) {
    // Реализация
}

const fn = debounce(() => console.log('fn'), 300);
fn();
fn();
fn();
// Ожидаемый вывод: 'fn' (один раз через 300 мс после последнего вызова)

```

---

## 174. Адаптивная верстка label и input с динамическим распределением ширины

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/adaptivnaya-verstka-label-i-input-s-dinamicheskim-raspredeleniem-shirinyi-1

### Задача

Сверстать блок, где:
label занимает ширину по содержимому (тексту)
input растягивается на всю оставшуюся доступную ширину
Элементы находятся в одной строке
```javascript
|--------------|
|label ________|
| ________label|
|long label ___|
|--------------|

```

---

## 175. Преобразование массива пользователей в структуру, сгруппированную по указанному полю

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/preobrazovanie-massiva-polzovatelej-v-strukturu-sgruppirovannuyu-po-ukazannomu-polyu-1

### Задача

Сгруппировать массив пользователей по одному из полей (кроме id)
Внутри каждой группы должен быть объект (или Map), где:
Ключи — значения id пользователей
Значения — объекты пользователей без поля id
```javascript
const data = [
    { id: 1, age: 20, name: "Иван", country: "Russia", registered: true },
    { id: 2, age: 30, name: "Дима", country: "USA", registered: true },
    { id: 3, age: 25, name: "Леха", country: "Russia", registered: false },
    { id: 4, age: 20, name: "Леха", country: "USA", registered: false },
    { id: 5, age: 30, name: "Иван", country: "Russia", registered: true },
    { id: 6, age: 50, name: "Леха", country: "Russia", registered: true },
    { id: 7, age: 20, name: "Дима", country: "USA", registered: false }
];

console.log(groupUsers(data, "country"));

{
    "Russia": {
        "1": { age: 20, name: "Иван", registered: true },
        // ...
    },
    "USA": {
        "2": { age: 30, name: "Дима", registered: true },
        // ...
    }
}

```

---

## 176. Вывод в консоль №44

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-15

### Задача

Определить что будет выведено в консоль
```javascript
let firstObj = { greeting: 'hey' };
let secondObj = firstObj;
firstObj.greeting = 'ho';
console.log(secondObj.greeting);
firstObj = { greeting: 'hello' };
console.log(secondObj.greeting);

```

---

## 177. Вывод в консоль №45

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-16

### Задача

Определить что будет выведено в консоль
```javascript
function makeBook() {
    let book = [];
    let i = 0;
    while (i < 10) {
        const page = function() {
            console.log(i);
        };
        i++;
        book.push(page);
    }
    return book;
}

let reader = makeBook();
reader[0](); // ?
reader[5](); // ?

```

---

## 178. Вывод в консоль №46

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-17

### Задача

Определить что будет выведено в консоль
```javascript
setTimeout(() => {
    console.log("timeOut");
}, 0);

console.log(1);

new Promise(resolve => {
    console.log("Promise");
    setTimeout(() => {
        console.log("777");
        resolve();
    }, 0);
}).then(() => {
    setTimeout(() => {
        console.log("then1");
    }, 0);
}).then(() => {
    console.log("then2");
});

console.log(4);

setTimeout(() => {
    console.log("timeOut2");
}, 0);

```

---

## 179. Исправить код

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-kod-4-3

### Задача

Ререндер дочернего компонента SubElement только при чётных значениях count
props менять нельзя
```javascript
import React, { useState } from "react";

const ParentElement = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
    
    return (
        <>
            Parent: {count} <br />
            <SubElement clicker={increment} count={count} />
        </>
    );
};

const SubElement = ({ clicker, count }) => {
    return (
        <>
            Sub: {count} <br />
            <button onClick={clicker}>Increment</button>
        </>
    );
};

```

---

## 180. Вывод в консоль №47

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-18

### Задача

Определить что будет выведено в консоль
```javascript
const person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};

const newPerson = Object.assign({}, person);
newPerson.address.city = "Newtown";
console.log(person.address.city);

```

---

## 181. Вывод в консоль №48

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-19

### Задача

Определить что будет выведено в консоль
```javascript
let x = 1;
function foo() {
    console.log(x);
    let x = 2;
}
foo();

```

---

## 182. Вывод в консоль №49

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-20

### Задача

Определить что будет выведено в консоль
```javascript
function outer() {
    let a = 1;
    return function inner() {
        a++;
        console.log(a);
    };
}

let fun1 = outer();
fun1();
fun1();
fun1();
let fun2 = outer();
fun2();

```

---

## 183. Вывод в консоль №50

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-21

### Задача

Определить что будет выведено в консоль
```javascript
setTimeout(() => console.log('STM 1'), 0);
Promise.resolve().then(() => console.log('STM 2'));
Promise.resolve().then(() => setTimeout(() => console.log('STM 3'), 0));
setTimeout(() => console.log('STM 4'), 0);
console.log('STM 5');

```

---

## 184. Функция с фильтрацией возвращает новый объект на основе свойств двух объектов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-s-filtratsiej-vozvraschaet-novyij-obekt-na-osnove-svojstv-dvuh-obektov-1

### Задача

Функция create, которая:
Принимает два объекта a (исходные данные) и b (фильтр)
Возвращает новый объект c, содержащий только те свойства из a, для которых в b указано true
```javascript
const a = { fi: 1, k: 2, j: 5, o: 8, d: [3, 4, 5] };
const b = { fi: true, k: false, j: true };
const c = create(a, b); // Должно вернуть { fi: 1, j: 5 }

```

---

## 185. Изменение состояния через 3 секунды при обновлении данных

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/izmenenie-sostoyaniya-cherez-3-sekundyi-pri-obnovlenii-dannyih-1

### Задача

Компонент получает пропс data (может изменяться)
При каждом изменении data необходимо:
Через 3 секунды изменить состояние isFocus на противоположное значение
```javascript
const App = ({ data }) => {
    const [isFocus, setIsFocus] = useState(false);
    return null;
}

```

---

## 186. Исправить код

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-kod-4-4

### Задача

Произвести рефакторинг компонента ClickListener
```javascript
import React from "react";

const Api = {
    uploads: (data) => console.log(data + " uploaded"),
};

const ClickListener = () => {
    const [x, setX] = React.useState();
    const upload = React.useCallback(() => {
        Api.uploads(x);
    }, []);

    React.useEffect(() => {
        document.addEventListener("click", (e) => {
            setX(e.pageX);
            upload();
        });
    });

    return <>{x}</>;
};

```

---

## 187. Вывод в консоль №51

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-22

### Задача

Что выведится в консоль 
```javascript

console.clear()
console.log(a)
console.log(b)
console.log(c)
var a = 1
let b = 2
const = 3

```

---

## 188. Вывод в консоль №52

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-23

### Задача

Что выведится в консоль 
```javascript

const.obj = {
someProp: ''
}
console.log(someProp)
console.someProp = 'James'
console.log(obj.someProp)

```

---

## 189. Вывод в консоль №53

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-24

### Задача

Что выведится в консоль 
```javascript

function.func(){}
console.log(typeof {})
console.log(typeof [])
console.log(typeof func)
console.log(typeof null)

```

---

## 190. Сравнение с неявным приведением типов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sravnenie-s-neyavnyim-privedeniem-tipov-1

### Задача

Что написать вместо x чтобы в консоль напечаталось true
```javascript

let age;
console.log((age == x) === true)

```

---

## 191. Функция счетчик

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-schetchik-2

### Задача

Реализовать функцию, которая при каждом вызове будет увеличивать свое значение на единицу, начнем от 0. Ограничение: в глобальной области видимости доступна лишь сама функция. Как это сделать, с помощью IIFE?

---

## 192. Вывод в консоль №55

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-26

### Задача

Что выведится в консоль 
```javascript

const myData = {
firstName = 'Максим'
}
const yourData = myData
yourData.firstName = 'Андрей'

console.log(myData)
console.log(yourData)

```

---

## 193. Работа с Promise и динамическими индексами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/rabota-s-promise-i-dinamicheskimi-indeksami-1

### Задача

Что вернет в функция
```javascript

const ajax = () => new Promise((resolve, reject) => {
  const result = [];
  for (let id = 0; id < 10; id++) {
    result[id * id] = {
      id,
      hash: Math.ceil(Math.random() * 10)
    };
  }
  resolve(result);
});

```

---

## 194. Реализация хука

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-huka-1

### Задача

Реализовать useFirstRender, который должен возвращать true/false
```javascript

react 
const useFirstRender = () => { };

function RenderAfterFirstRender(props) {
    const isFirstRender = useFirstRender();

    if (isFirstRender) {
        return "Hwuero";
    }

    return props.children;
}

```

---

## 195. Вывод в консоль №56

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-27

### Задача

В каком порядке выведутся строчки
```javascript

Promise.resolve(1)
    .then(x => console.log(1))
    .catch(x => console.log(2))
    .then(x => console.log(3))

Promise.reject(2)
    .then(x => console.log(4))
    .then(x => console.log(5))
    .catch(x => console.log(6))
    .then(x => console.log(7))

```

---

## 196. Вывод в консоль №57

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-28

### Задача

В каком порядке выведутся строчки
```javascript

Promise.resolve(1)
    .then(x => console.log(1))
    .catch(x => console.log(2))
    .then(x => console.log(3))

Promise.reject(2)
    .then(x => console.log(4))
    .catch(x => console.log(6))
    .then(x => console.log(7))

```

---

## 197. Работа программы

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/rabota-programmyi-1

### Задача

Как отработает программа
```javascript

const userService = {
    currentFilter: 'active',
    users: [
        { name: 'Alex', status: 'active' },
        { name: 'Nick', status: 'deleted' },
    ],
    getFilteredUsers: function () {
        return this.users.filter(function (user) {
            return user.status === this.currentFilter;
        });
    }
};

console.log(userService.getFilteredUsers());

```

---

## 198. Вывод в консоль №58

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-29

### Задача

Что выведится в консоль
```javascript

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

```

---

## 199. Реализация функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-funktsii-6-4

### Задача

Напишите функцию, в которую передается целое число. Функция должна вывести горку как показано в примере с тем числом линий, которое было передано в параметр функции

---

## 200. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { Component } from "react";

export default class App extends Component {
    onClick = (event) => {
        this.setState({ event });
    });

    logEvent = () => {
        console.log(this.state.event.target);
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me</button>
                <button onClick={this.logEvent}>log event</button>
            </div>
        );
    }
}

```

---

## 201. Способы реализации стрелочной функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sposobyi-realizatsii-strelochnoj-funktsii-1

### Задача

Написать все способы создания стрелочной функции

---

## 202. Знание языка

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/znanie-yazyika-1

### Задача

Что означают:
1.  ?.
2.  ...
3.  ??
4.  &&=
5. structuredClone(bar)  
6. someArray.at()

---

## 203. Чтение кода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/chtenie-koda-1

### Задача

Чему равняется foo и bar
```javascript

const run = () => {
    // 1
    const { foo, bar } = { foo: 1, bar: 2 }
    console.log('1)', { foo, bar }) // {foo: , bar: }
}

{
    // 2
    const { foo: bar, bar: foo } = { foo: 1, bar: 2 }
    console.log('2)', { foo, bar }) // {foo: , bar: }
}

{
    // 3
    const { foo: [bar], bar: foo } = { foo: [1], bar: [2] }
    console.log('3)', { foo, bar }) // {foo: , bar: }
}

{
    // 4
    const { foo: [bar], bar: foo } = { foo: [1], bar: [ { baz: 3 } ] }
    console.log('4)', { foo, bar }) // {foo: , bar: }
}

{
    // 5
    const { foo: [bar], bar: [ { baz: foo } ] } = { foo: [1], bar: [ { baz: 3 } ] }
    console.log('5)', { foo, bar }) // {foo: , bar: }
}

{
    // 6
    const value = {
        foo: [ { baz: 1 } ],
        baz: 2
    };

    const { foo: [ { baz: foo } ], bar: { baz: bar } = { baz: 3 } } = value;
    console.log('6)', { foo, bar }) // {foo: , bar: }

```

---

## 204. Вывод в консоль №59

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-30

### Задача

Что выведится в консоль 
```javascript

let obj = { a: 1 };
let array = [obj];

obj = { ...obj, b: 5 };
console.log(obj); // Console.log(array);

```

---

## 205. Вывод в консоль №60

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-31

### Задача

В какой последовательности выведутся log
```javascript

const run = () => {
    setTimeout(() => {
        console.log('timeOut');
    }, 0);
    console.log(1);
    new Promise(resolve => {
        console.log('Promise');
        setTimeout(() => {
            console.log('777');
            resolve();
        }, 0);
    })
    .then(() => {
        console.log('then1');
    })
    .then(() => {
        console.log('then2');
    });
    console.log(4);
    setTimeout(() => {
        console.log('timeOut2');
    }, 0);
};

```

---

## 206. Копирование объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kopirovanie-obekta-2-2

### Задача

Скопировать объект без ссылки на объект-источник
```javascript
let user = {
  name: 'Igor',
  age: 19,
  address: {
    city: 'Petersburg'
  }
}

```

---

## 207. Функция сложения элементов массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-slozheniya-elementov-massiva-1

### Задача

Скопировать объект без ссылки на объект-источник
```javascript
let user = {
  name: 'Igor',
  age: 19,
  address: {
    city: 'Petersburg'
  }
}

```

---

## 208. Кастомный хук useFetch()

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kastomnyij-huk-usefetch-1

### Задача

Написать кастомный хук useFetch(), который принимает в качестве аргумента url
```javascript
function useFetch(url) {}

```

---

## 209. Функция проверки совпадения массивов чисел

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-proverki-sovpadeniya-massivov-chisel-1

### Задача

Написать функцию, которая принимает в качестве аргументов два массива чисел и проверяет совпадают ли эти массивы
```javascript
// isSimilar([0,1,2], [2,1,0]) === true
// isSimilar([0,1], [2,1,0]) === false
// isSimilar([0,5,1], [0,1,5]) === true

isSimilar(arr1, arr2)

function isSimilar(arr1, arr2) {
}

```

---

## 210. Компонент вывода данных на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/komponent-vyivoda-dannyih-na-react-1

### Задача

Написать React-компонент, который обращается к определенному адресу на сервер и рендерит полученные данные в виде списка
```javascript
/api/items
{
  result: {
    code: 6,
    items: [
      { id: 15, name: 'foo' },
      { id: 48, name: 'bar' }
    ]
  }
}

```

---

## 211. Полифил для Promise.all()

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/polifil-dlya-promiseall-1

### Задача

Написать полифил для статического метода Promise.all()
```javascript
function promiseAll(promises) {
}

// promiseAll([p1, p2, p3]).then(results => ...)

```

---

## 212. Функция, возвращающая уникальные значения массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vozvraschayuschaya-unikalnyie-znacheniya-massiva-1

### Задача

Написать функцию, которая принимает в качестве аргумента некую последовательность и возвращает массив элементов со след условиями: стоящие рядом значения не повторяются и последовательность сохраняется
```javascript
// ПРИМЕР:
// func('AAAABBBCCDAABBB') => ['A', 'B', 'C', 'D', 'A', 'B']
// func('ABBCcAD') => ['A', 'B', 'C', 'c', 'A', 'D']
// func([1,2,2,3,3]) => [1,2,3]

function uniqueSequence(str) {}

```

---

## 213. Функция преобразования слов в CamelCase

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-preobrazovaniya-slov-v-camelcase-1

### Задача

Написать функцию, которая принимает в качестве аргумента некую последовательность и возвращает массив элементов со след условиями: стоящие рядом значения не повторяются и последовательность сохраняется
```javascript
// ПРИМЕР:
// func('AAAABBBCCDAABBB') => ['A', 'B', 'C', 'D', 'A', 'B']
// func('ABBCcAD') => ['A', 'B', 'C', 'c', 'A', 'D']
// func([1,2,2,3,3]) => [1,2,3]

function uniqueSequence(str) {}

```

---

## 214. To-do list

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/to-do-list-1

### Задача

Написать to-do list, который может использовать приведенные ниже методы 
```javascript
const App = () => {
  return <main></main>;
};

export default App;

export function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

let count = 0;

function getId() {
  return count++;
}

export interface TodoItem {
  id: number;
  title: string;
  complete: boolean;
  createAt: number;
}

const store: TodoItem[] = [
  {
    id: 666,
    title: "default",
    complete: false,
    createAt: 123
  }
];

export async function getItems() {
  await sleep(1_000);
  // clone items so we can safely mutate them in store
  return store.map((item) => ({ ...item }));
}

export async function createItem(title: string) {
  await sleep(1_000);

  const item = {
    id: getId(),
    title,
    complete: false,
    createAt: Date.now()
  };

  store.push(item);

  return item;
}

export async function deleteItem(id: number) {
  await sleep(1_000);

  const storedItemIndex = store.findIndex((item) => item.id === id);

  if (storedItemIndex === -1) {
    throw new Error("item not found");
  }

  store.splice(storedItemIndex, 1);
}

```

---

## 215. Рефакторинг компонента на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/refaktoring-komponenta-na-react-1

### Задача

Сделать рефакторинг React-компонента
```javascript
import React from 'react';

const PleaseReviewMe = () => {
  const [count, setCount] = React.useState(1);
  const [items, setItems] = React.useState([{ id: 1 }]);

  React.useLayoutEffect(() => {
    document.addEventListener('click', () => {
      setInterval(() => console.log(count), 1000);
    });
  });

  const click = React.useCallback(() => {
    setCount(count + 1);
    setItems([...items, { id: count + 1 }]);
  });

  return (
    <React.Fragment>
      Current count: {count}
      <ul>
        {items.map((item) => (
          <li>{item.id}</li>
        ))}
      </ul>
      <button onClick={() => click()}>add once</button>
    </React.Fragment>
  );
};

export default PleaseReviewMe;

```

---

## 216. Вывод в консоль №9

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-34

### Задача

Что выведет консоль
```javascript
var a = {
  firstName: 'Bill',
  lastName: 'Ivanov',
  sayName: function() {
    console.log(this.firstName);
  },
  sayLastName: () => {
    console.log(this.lastName);
  }
};

a.sayName(); //

var b = a.sayName;
b(); //

a.sayName.bind({ firstName: 'Boris' })(); //

a.sayName(); //
a.sayLastName(); //

a.sayName.bind({ firstName: 'Boris' }).bind({ firstName: 'Tom' })(); //
a.sayLastName.bind({ lastName: 'Petrov' })(); //

```

---

## 217. Вывод в консоль №10

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-35

### Задача

Что выведет консоль
```javascript
console.log('start'); //

setTimeout(() => console.log('timeout'), 0); //

new Promise((resolve, reject) => {
  console.log('promise constructor'); //
  reject();
})
  .then(() => console.log('promise1')) //
  .catch(() => console.log('promise2')) //
  .catch(() => console.log('promise3')) //
  .then(() => console.log('promise4')); //

console.log('final'); //

```

---

## 218. Полифил метода Array.some()

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/polifil-metoda-arraysome-1

### Задача

Написать полифил, который реализует метод Array.some()
```javascript
// [2, 5, 8, 1, 4].some((element) => element > 10);  -------> false
// [12, 5, 8, 1, 4].some((element) => element > 10); -------> true

const some = () => {

}

```

---

## 219. Функция парсер CSV файла

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-parser-csv-fajla-1

### Задача

Написать функцию, которая будет парсить CSV файл
```javascript
/*
Input:
id,firstName,lastName,quote
42e9f,Linus,Torvalds,Talk is cheap. Show me the code.
4f5e4,Joel,Spolsky,It’s harder to read code than to write it.

Expected output:
[
  {
    id: '42e9f',
    firstName: 'Linus',
    lastName: 'Torvalds',
    quote: 'Talk is cheap. Show me the code.'
  },
  {
    id: '4f5e4',
    firstName: 'Joel',
    lastName: 'Spolsky',
    quote: 'It’s harder to read code than to write it.'
  }
]
*/

function parse(csv) {
  // ...
}

```

---

## 220. Функция бинарного поиска

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-binarnogo-poiska-1

### Задача

Написать функцию бинарного поиска, которая принимает в качестве аргументов массив уникальных целых чисел и искомый элемент и возвращает позицию элемента в массиве, т.е. его индекс или -1, если элемент в массиве не найден
```javascript
function binSearch(list, element) {
  // code
}

/* test 1— */
/* test 2— */

// const list = ...;

// const ans = binSearch(list, ?)
// console.log(ans)

```

---

## 221. Вывод в консоль №11

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-36

### Задача

Что выведет консоль и почему
```javascript
const ZERO_MS = 0;

function printConsole(arg) {
  console.log(arg);
}

function task1() {
  printConsole('🍏');

  setTimeout(printConsole, ZERO_MS, '🍋');

  new Promise(resolve => {
    resolve('🍉');
  }).then(printConsole);

  printConsole('🍇');
}

task1();

```

---

## 222. Вывод в консоль №12

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-37

### Задача

Что выведет консоль и почему
```javascript
const ZERO_MS = 0;

function printConsole(arg) {
  console.log(arg);
}

function task2() {
  printConsole('🍏');

  setTimeout(() => {
    printConsole('🍍');
    Promise.resolve('🍌').then(printConsole);
  }, ZERO_MS);

  setTimeout(printConsole, ZERO_MS, '🍋');

  Promise.resolve('🍉').then(printConsole);
  Promise.resolve('🍇').then(printConsole);

  printConsole('🍈');
}

task2();

```

---

## 223. Функция вывода в консоль всех мяукающих кошек сразу

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyivoda-v-konsol-vseh-myaukayuschih-koshek-srazu-1

### Задача

Отель для животных принимает на время только кошек и собак. В этот день кошек и собак поровну: 5 кошек и 5 собак, но кошки как-то сговорились или луна не в той фазе и все кошки в отеле мяукают. Функция fetchAnimals() возвращает всех животных с задержкой в 1 секунду. Функция animalRecognizer() с задержкой определяет и добавляет тип животного и возвращает новый объект. Написать функцию, которая выведет в консоль всех мяукающих кошек сразу
```javascript
const ANIMAL_TYPE = {
  CAT: 'cat',
  DOG: 'dog',
};

const ANIMAL_VOICE = {
  MEOW: 'meow',
  WOOF: 'woof',
};

const TIMEOUT = {
  1000: 1000,
  75: 75,
};

class DataItem {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }

  makeSound() {
    if (this.type) {
      console.log(this.name, '-', this.voice);
    } else {
      console.log('Ooops');
    }
  }
}

const ANIMALS_TYPE = {
  Molly: ANIMAL_TYPE.CAT,
  Felix: ANIMAL_TYPE.DOG,
  Smudge: ANIMAL_TYPE.CAT,
  Sooty: ANIMAL_TYPE.CAT,
  Tigger: ANIMAL_TYPE.CAT,
  Charlie: ANIMAL_TYPE.DOG,
  Alfie: ANIMAL_TYPE.CAT,
  Oscar: ANIMAL_TYPE.DOG,
  Millie: ANIMAL_TYPE.DOG,
  Misty: ANIMAL_TYPE.CAT,
};

const DATA = [
  new DataItem('Molly', ANIMAL_VOICE.MEOW),
  new DataItem('Felix', ANIMAL_VOICE.WOOF),
  new DataItem('Smudge', ANIMAL_VOICE.MEOW),
  new DataItem('Sooty', ANIMAL_VOICE.WOOF),
  new DataItem('Tigger', ANIMAL_VOICE.MEOW),
  new DataItem('Charlie', ANIMAL_VOICE.WOOF),
  new DataItem('Alfie', ANIMAL_VOICE.MEOW),
  new DataItem('Oscar', ANIMAL_VOICE.WOOF),
  new DataItem('Millie', ANIMAL_VOICE.WOOF),
  new DataItem('Misty', ANIMAL_VOICE.MEOW),
];

function fetchAnimals() {
  return new Promise(resolve => {
    setTimeout(resolve, TIMEOUT[1000], DATA);
  });
}

function animalRecognizer(dataItem) {
  const animalWithType = Object.create(dataItem);

  animalWithType.type = ANIMALS_TYPE[dataItem.name];

  return new Promise(resolve => {
    setTimeout(resolve, TIMEOUT[75], animalWithType);
  });
}

```

---

## 224. Вывод в консоль №13

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-38

### Задача

Что выведет консоль
```javascript
function fn() {
  console.log("hello");

  setTimeout(function () {
    console.log("setTimeout");
  }, 0);

  new Promise(function (resolve) {
    console.log("sub");

    resolve();
  })
    .then(function () {
      console.log("then1");
    })
    .then(function () {
      console.log("then2");
    });

  console.log("bye");
}

fn();

```

---

## 225. Вывод в консоль №14

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-39

### Задача

Что выведет консоль
```javascript
(function foo() {
  let a = "3";
  let b = 3;
  console.log(a + b);
})();

```

---

## 226. Функция сумматор

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-summator-1

### Задача

Написать функцию сумматор
```javascript
// Пример сумматора:
f(a)(b)(c)(d)   // -> a + b + c + d
f(a)(b)         // -> a + b
f(a)(b)()       // -> console.log(a + b)
f(a)(b)(c)(d)   // -> a + b + c + d

f(a)(b)(c)(d)

function f(x) {
  return (y) => 
    y ? f(x + y) : console.log(x);
}

```

---

## 227. Определение цвета текста по стилям CSS

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/opredelenie-tsveta-teksta-po-stilyam-css-1

### Задача

Определить какого цвета будет текст по стилям CSS
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="parent">
    <p class="child">
      Text
    </p>
  </div>

  <style>
    div {
      color: red;
    }

    .child {
      color: green;
    }

    .child:first-child {
      color: salmon;
    }

    .parent p {
      color: gold;
    }

    .parent {
      color: blue;
    }

    .parent * {
      color: cyan;
    }
  </style>

  <script src="script.js"></script>

</body>

</html>

```

---

## 228. Обработчик события вне модального окна

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obrabotchik-sobyitiya-vne-modalnogo-okna-1

### Задача

Написать обработчик события, который будет срабатывать только вне модального окна. Обработчки события, например, будет ссылаться на функцию onClose() для закрытия модального окна
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <style>
    .modal {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      background-color: #fff;
      height: 300px;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      font-size: 22px;
    }
  </style>

  <div class="modal">
    <div class="modal-content">
      <button>
        Click on me!
      </button>
    </div>
  </div>

  <script>
    function onClose() {
      console.log('Close modal')
    }
  </script>
  <script src="script.js"></script>
</body>
</html>

```

---

## 229. Реализация коллекции Set

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-kollektsii-set-1

### Задача

Написать четыре метода класса Set, которые имитируют работу коллекции Set
```javascript
class Set {
  constructor(items) {}

  add(item) {}

  has(item) {}

  delete(item) {}
}

```

---

## 230. Реализация метода Promise.allSettled()

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-metoda-promiseallsettled-1

### Задача

Написать функцию allSettled(), которая имитирует работу метода Promise.allSettled()
```javascript
function allSettled(promises) {}

allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  Promise.reject(2),
  Promise.resolve(3),
]).then(console.log);

// [
//   { "status": "fulfilled", "value": 1 },
//   { "status": "rejected", "reason": 2 },
//   { "status": "fulfilled", "value": 3 }
// ]

```

---

## 231. Сортировка и группировка операций по году

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-i-gruppirovka-operatsij-po-godu-1

### Задача

Необходимо реализовать функцию, которая принимает массив операций, сортирует их по дате и группирует по годам, представляя значения в виде массивов с датами в формате ММ-ДД.
```javascript
result = {
  '2017': ['07-31', '08-22'],
  '2018': ['01-01', '02-22'],
};
const operations = [
  { date: '2017-07-31', amount: '5422' },
  { date: '2017-08-22', amount: '5423' },
  { date: '2018-01-01', amount: '5422' },
  { date: '2018-02-22', amount: '5422' },
];

```

---

## 232. Типизаций Set, чтобы принимал лишь числа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizatsij-set-chtobyi-prinimal-lish-chisla-1

### Задача

Типизировать Set, чтобы принимал лишь числа.
```javascript
const numberSet = new Set()

```

---

## 233. Улучшение типизации функции для создания массива значений из объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/uluchshenie-tipizatsii-funktsii-dlya-sozdaniya-massiva-znachenij-iz-obekta-1

### Задача

Необходимо улучшить типизацию функции, которая создает массив значений из объекта по указанным ключам, чтобы она корректно обрабатывала случаи, когда запрашиваются несуществующие ключи, и предотвращала ошибки компиляции в TypeScript.
```javascript
const arrayFromkeys = (obj: Record<string, any>, keys: string[]) => { 
  const out = [];
  for (const key of keys) (
    out.push(obj[key]);
  )
  return out;
}
const obj = {
  a: 1, 
  b: 'B',
  'c d': null,
}

// Ошибка
arrayFronkeys(obj, ['z']);

```

---

## 234. Реализация функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-funktsii-6-3

### Задача

Необходимо написать функцию str.join, которая склеивает строки через разделитель.
```javascript

function str.join() {  
    // code here  
}  

console.log(str.join('.', 'a', 'b', 'c')) // 'a.b.c'  
console.log(str.join('-', 'a', 'b', 'c', 'd', 'e', 'f')) // 'a-b-c-d-e-f'  

```

---

## 235. Обработка значений controlled и uncontrolled полей формы в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obrabotka-znachenij-controlled-i-uncontrolled-polej-formyi-v-react-1

### Задача

Необходимо реализовать вывод значений controlled и uncontrolled полей формы в консоль при отправке, корректно используя controlled input с useState и uncontrolled input с ref.
```javascript
export default () => {
  const fn() => {
    console.log("First input value: ");
    console.log("second input value: ");
    };
  
  return (
    <form onClick-(fn)>
    <input placeholder-"controlled field" /> 
    <input placeholder="uncontrolled field" />
    <button>Отправить заявку на кредит</buttons>
    </form>
    )
}

```

---

## 236. Хук определения первого рендера компонента

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/huk-opredeleniya-pervogo-rendera-komponenta-1

### Задача

Реализовать кастомный хук useFirstRender, который возвращает true только при первом рендере компонента, а на последующих рендерах — false.
```javascript
export default function App (props) { 
  const isFirstRender = useFirstRender();
  if(isFirstRender) return null;
  
  return props.children
}

```

---

## 237. Реализация функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-funktsii-6-2

### Задача

Реализоавать функцию compose
```javascript

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));

```

---

## 238. Анализ и рефакторинг React-компонента с useLayoutEffect и useCallback

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/analiz-i-refaktoring-react-komponenta-s-uselayouteffect-i-usecallback-1

### Задача

Провести ревью и исправление React-компонента, выявив неточности в использовании хуков useLayoutEffect и useCallback, а также устранить потенциальные проблемы с утечкой памяти, множественными обработчиками событий и некорректным рендерингом JSX.
```javascript
const pleaseReviewMe = () => {
  const [count, setCount] = React.useState(1);
  const [items, setItems] = React.useState([{ id: 1 }]);
  
  React.useLayoutEffect(() => {
    document.addEventListener("click", () => { 
      setInterval(() => console.log(count), 1000);
    }); 
  });
  
  const click = React.useCallback(() => { 
    setCount(count + 1);
    setItems([...items, { id: count + 1 }]);
  });
  return (
    <React.Fragment>
      <ul>
        (items.map((item) => (
        <li>{item.id)</li>
        ))}
      </ul>
      <button onClick={() => click()}>add one</button> 
    </React.Fragment>
}

```

---

## 239. Создание своей mock-функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-svoej-mock-funktsii-1

### Задача

Реализовать свою версию mock-функции, которая отслеживает количество вызовов, аргументы, переданные при каждом вызове, и позволяет задавать возвращаемые значения для имитации поведения оригинальной функции.

---

## 240. Реализация функции map с использованием дженериков

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-funktsii-map-s-ispolzovaniem-dzhenerikov-1

### Задача

Создать свою реализацию функции map, использующую дженерики, которая принимает массив и функцию обратного вызова, и возвращает новый массив, содержащий результаты применения функции к каждому элементу исходного массива.

---

## 241. Запрет изменения полей объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zapret-izmeneniya-polej-obekta-1

### Задача

Запретить переписывать поле объекта
```javascript
 const obj = {
    someProp: ''
}
console.log(obj.someProp)

obj.someProp = 'James'
console.log(obj.someProp)

```

---

## 242. Реализация функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-funktsii-6

### Задача

Функция asyncAuth(callback) принимает callback, в который может быть передана ошибка (первым аргументом) и данные с бэкенда (вторым аргументом).
asyncAuth((error, data) => {});
Вам нужно реализовать функцию auth()', которая вызывает `asyncAuth(), но возвращает Promise.
 @returns {Promise}
function auth() {
    // asyncAuth((error, data) => {});
}

Функция tryAuth() использует auth() и, в случае ошибки,
  совершает N дополнительных попыток.
  в случае, если все попытки провалились - вернуть последнюю ошибку
 
 @returns {Promise}
 
function tryAuth(n) {
}

---

## 243. Приведение типов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/privedenie-tipov-2

### Задача

Заменить переменную x, чтобы в консоль вывелось true
```javascript
 let age;
console.log((age == x) === true)

```

---

## 244. Самовызывающаяся функция

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/samovyizyivayuschayasya-funktsiya-1

### Задача

Реализовать анонимную самовызывающуюся функцю

---

## 245. Функция сортировки слов в строке

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-sortirovki-slov-v-stroke-2

### Задача

Реализовать функцию, которая принимает строку слов, в которых есть числа и возвращает строку, отсортированную по числам в словах
```javascript

 sortWords('T4est 3a Thi1s is2') === 'Thi1s is2 3a T4est';

```

---

## 246. Функция вывода в обратном порядке

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyivoda-v-obratnom-poryadke-1

### Задача

Реализовать функцию, которая выведет значение переданного ей односвязного списка в обратном порядке

---

## 247. Функция мемоизации

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-memoizatsii-2-2

### Задача

Реализовать функцию memoize, которая принимает два параметра: функцию, которую нужно мемоизировать и время, которое функция должна храниться.

---

## 248. Функция переворота строки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-perevorota-stroki-1

### Задача

Реализовать функцию переворота строки

---

## 249. Функция FizzBuzz

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-fizzbuzz-1

### Задача

Написать функцию, которая принимает число n и выводит все числа от 1 до n, но если текущее число делится на 3, то выводится "Fizz", если на 5 - "Buzz", если делится и на 3 и на 5, то выводится "FizzBuzz"

---

## 250. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { Component } from "react";

export default class App extends Component {
    onClick = (event) => {
        this.setState({ event });
    });

    logEvent = () => {
        console.log(this.state.event.target);
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me</button>
                <button onClick={this.logEvent}>log event</button>
            </div>
        );
    }
}

```

---

## 251. Своя реализация throttle

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-throttle-1

### Задача

Написать свою реализацию функции throttle

---

## 252. Вывод в консоль №61

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-40

### Задача

В каком порядке выведутся log
```javascript

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

Promise
.resolve()
.then(function() {
    console.log('promise1');
})
.then(function() {
    console.log('promise2');
});

```

---

## 253. Функция сортировки слов в строке

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-sortirovki-slov-v-stroke-2-2

### Задача

Реализовать функцию, которая принимает строку слов, в которых есть числа и возвращает строку, отсортированную по числам в словах
```javascript
 sortWords('T4est 3a Thi1s is2') === 'Thi1s is2 3a T4est';

```

---

## 254. Задача с формами и чекбоксами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zadacha-s-formami-i-chekboksami-1

### Задача

Реализовать стирание значения при нажатии на чекбокс
```javascript

import React from 'react';

export function App(props) {
    const [isChecked, setIsChecked] = React.useState(true);

    const handleOnChange = event => {
        setIsChecked(event.target.checked);
    };

    const renderForm1 = () => {
        return (
            <form>
                <label>Name 1</label>
                <input type='text' />
            </form>
        );
    };

    const renderForm2 = () => {
        return (
            <form>
                <label>Name 2</label>
                <input type='text' />
            </form>
        );
    };

    const form = isChecked ? renderForm1() : renderForm2();

    return (
        <div className='App'>
            <div>
                <label>test</label>
                <input type='checkbox' checked={isChecked} onChange={handleOnChange} />
            </div>
            {form}
        </div>
    );
}

```

---

## 255. Функция счетчик

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-schetchik-2

### Задача

Реализовать функцию, которая при каждом вызове будет увеличивать свое значение на единицу, начнем от 0. Ограничение: в глобальной области видимости доступна лишь сама функция. Как это сделать, с помощью IIFE?

---

## 256. Вывод в консоль №62

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-41

### Задача

в какой последовательности выведутся log
```javascript

import { useEffect, useLayoutEffect, useState } from 'react';

export function App() {
    console.log('App');
    const [state, setState] = useState(0);

    useEffect(() => {
        setState(prev => prev + 1);
    }, []);

    useEffect(() => {
        console.log('useEffect 1');
        return () => {
            console.log('useEffect 1, cleanup');
        };
    }, [state]);

    useEffect(() => {
        console.log('useEffect 2');
        return () => {
            console.log('useEffect 2 cleanup');
        };
    }, [state]);

    useLayoutEffect(() => {
        console.log('useLayoutEffect');
        return () => {
            console.log('useLayoutEffect cleanup');
        };
    }, [state]);

    return null;
}

```

---

## 257. Переворот слов в строке

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/perevorot-slov-v-stroke-1

### Задача

Реализовать функцию, которая принимает строку и переворачивает слова в ней, не меняя при этом их позицию в строке

---

## 258. Сортировка людей по росту

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-lyudej-po-rostu-1

### Задача

Написать функцию, которая принимает два массива: имена людей и их рост и возвращает имена, отсортированные по росту в порядке убывания

---

## 259. Функция с временным лимитом выполнения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-s-vremennyim-limitom-vyipolneniya-1

### Задача

Необходимо написать функцию, которая принимает два аргумента – асинхронную функцию и временной лимит в миллисекундах. Функция должна возвращать новую версию асинхронной функции, выполнение которой ограничено временным лимитом. Должны выполняться следующие условия:
 • Если время выполнение исходной функции меньше временного лимита, то новая функция должна вернуть результат выполнения асинхронной функции.
 • Если время выполнение исходной функции больше временного лимита, то новая функция вернуть сообщение “Превышен лимит времени исполнения”.
```javascript

const fn = async (n) => {
await new Promise(res => setTimeout(res, 100));
return n * n;
}
asyncLimit(fn, 50)(5); // rejected: Превышен лимит времени исполнения asyncLimit(fn, 150)(5); // resolved: 25
const fn2 = async (a, b) => {
await new Promise(res => setTimeout(res, 120));
return a + b;
}
asyncLimit(fn2, 100)(1, 2); // rejected: Превышен лимит времени исполнения asyncLimit(fn2, 150)(1, 2); // resolved: 3

```

---

## 260. Сумма чисел кратных 3, 5 и 7

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/summa-chisel-kratnyih-3-5-i-7-1

### Задача

Реализовать функцию, которая принимает число n, и возвращает сумму всех чисел от 1 до n кратных 3, 5 и 7

---

## 261. Максимальная длина предложения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/maksimalnaya-dlina-predlozheniya-1

### Задача

Реализовать функцию, которая принимает массив строк и возвращает строку, в которой больше всего слов

---

## 262. Реализация MinStack с операциями за O(1)

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-minstack-s-operatsiyami-za-o1-1

### Задача

Реализовать stack, у которого все функции работают за константное время
```javascript

class MinStack {
    pop() {
    }

    push(value) {
    }

    getMin() {
    }
}

```

---

## 263. Своя реализация toLowerCase

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-tolowercase-1

### Задача

Написать свою реализацию функции toLowerCase()

---

## 264. Функция вывода числового диапазона массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyivoda-chislovogo-diapazona-massiva-1

### Задача

Реализовать функцию range, которая принимает числовой массив и возвращает ее диапазон
```javascript

 range ([1, 4, 5, 2, 3, 9, 8, 11, 0]) // '0-5,8-9,11'  
range ([1, 4, 3, 2]) // '1-4'  

function range (arr) {  
}

```

---

## 265. Вывод в консоль №63

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-42

### Задача

В каком порядке выведутся log
```javascript

console.log(1);
setTimeout(function() {
    console.log(2);
});

Promise.resolve(3).then(console.log);

console.log(4);
setTimeout(function() {
    console.log(5);
}, 0);
console.log(6);

```

---

## 266. Вывод в консоль №15

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-43

### Задача

Определить что будет выведено в консоль
```javascript
 console.log('0');

setTimeout(function timeout() {
    console.log('1');
}, 100);

let p = new Promise(function(resolve, reject) {
    console.log('2');
    resolve();
});

p.then(function() {
    console.log('3');
});

setTimeout(function timeout() {
    console.log('5');
}, 0);

console.log('6');

```

---

## 267. Функция проверки на палиндром

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-proverki-na-palindrom-5-5

### Задача

Написать функцию, которая проверяет является ли строка палиндромом
Примеры палиндромов:
- Казак
- А роза упала на лапу Азора
- Do geese see God?
- Madam, I’m Adam
Ограничение по памяти O(1).

---

## 268. Вывод в консоль №64

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-44

### Задача

В каком порядке выведутся log
```javascript

console.log(1);

setTimeout(function() {
    console.log(2);
});

Promise.resolve(3).then(console.log);

console.log(4);

setTimeout(function() {
    console.log(5);
}, 0);

console.log(6);

const foo1 = {} => {
    console.log('foo1');

    return Promise.resolve().then(foo1);
}

foo1(); 

```

---

## 269. Функция поиска вариантов перелетов из точки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-poiska-variantov-pereletov-iz-tochki-1

### Задача

Написать функцию, которая принимает две точки и функцию fetchFlights, и возвращает Promise.resolve с маршрутом в виде точек внутри, либо Promise.reject с текстом "No way"
```javascript

 // функция поиска вариантов перелетов из точки
function fetchFlights(from: string): Promise<string[]);

// Например, для
// graph = {A: [B, D], B: [C, N, Z], D : [E, F], F: [S]}

findPath('A', 'N', fetchFlights) // Promise.resolve(['A', 'B', 'N'])
findPath('A', 'S', fetchFlights) // Promise.resolve(['A', 'D', 'F', 'S'])
findPath('B', 'S', fetchFlights) // Promise.reject(new Error('No way'))
// функция поиска составного авиабилета
function findPath(from, to, fetchFlights) {
    // your code here
}

```

---

## 270. Функция задержки выполнения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-zaderzhki-vyipolneniya-1

### Задача

Реализовать функцию, которая принмает время, на которое нужно задержать выполнение кода и значение, которое нужно вернуть после задержки.

---

## 271. Вывод в консоль №65

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-45

### Задача

В каком порядке выведутся log
```javascript

console.log(1);

setTimeout(function() {
    console.log(2);
});

Promise.resolve(3).then(console.log);

console.log(4);

setTimeout(function() {
    console.log(5);
}, 0);

console.log(6);

const foo2 = () => {
    console.log('foo2');
    setTimeout(foo2);
}

foo2(); 

```

---

## 272. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-9

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
    console.log('Count updated: ${count}`);
    if (count === 5) {
    setCount(0);
    }
    },
    [count];
    }
}

const increment = () => {
    setCount(count + 1);
};

return (
    <div>
    <p>Count: {count}</p>
    <div>
)

```

---

## 273. Реализация аналога Promise.all

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-analoga-promiseall-1

### Задача

Необходимо написать свою функцию promiseAll, которая является аналогом Promise.all.
Требования к функции:
 • На вход поступает массив промисов
 • Возвращает reject, если хотя бы один промис упал
 • Возвращает resolve, если все промисы успешно выполнены
 • В случае resolve порядок результатов должен сохраняться
 • В случае reject сразу возвращает reject, не дожидаясь выполнения остальных промиссов

---

## 274. Контроллируемый input

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontrolliruemyij-input-1

### Задача

Реализовать получение данных из контролируемого и неконтролируемого input
```javascript
 import React from "react";

export default function App() {
    const fn = () => {
    console.log("controlled input value: ");
    console.log("uncontrolled input value: ");
};

return (
    <form onClick={fn}>x
    <input
    placeholder="controlled field"
    />
    <input placeholder="uncontrolled field" />
    <button>Отправить заявку на кредит</button>
</form>
)

```

---

## 275. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-10

### Задача

Найти и исправить ошибки в коде
```javascript

 import React, { useState, useEffect } from "react";

const Button = (props) => {
    return <div style={{ border: 'lpx solid black', width: '150px' }} onClick={() => props.onClick()}>(props.title</div>
}

const User = (props) => {
    return <div>(props.age)</div>
}

export default () => [
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [remainTime, setRemainTime] = useState(15);

    const handleClick = () => {
    setCount(count + 1);

    setUsers({
    ...users,
    {
    id: 1 + Math.floor(Math.random() * 10),
    age: 20 + Math.random() * 40,
    },
    });
});

const handleRemove = () => {
    setCount(0);
    setUsers([]);
};

useEffect(() => {
    setTimeout(() => {
    setRemainTime(remainTime - 0.1);
    }, 100);
}, [remainTime, setRemainTime]);

const ageSum = users.reduce((sum, user) => sum + user.age, 0);

if (remainTime <= 0)

return (
    <div>
    <div>Count: {count}</div>
    <div>Age sum: {Math.round(ageSum)}</div>
    {users.map((value) => (
    <User id=(value.id) age=(value.age) />
    )});
    </div>
);

return (
    <div>
    <div>Remain time: {remainTime.toFixed(1)} seconds</div>
    <Button onClick=(handleClick) title="Add random user" />
    <div>Count: {count}</div>
    <div>Age sum: {Math.round(ageSum)}</div>
    {users.map((value) => (
    <User id=(value.id) age=(value.age) />
    )});
    {count > 0 && <Button onClick=(handleRemove) title="Remove all" className="remove-button" />
    </div>
);

```

---

## 276. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-11

### Задача

Найти и исправить ошибки в коде
```javascript
 const userService = {
    currentFilter: 'active',
    users: [
    { name: 'Alex', status: 'active' },
    { name: 'Nick', status: 'deleted' },
    ],
    getFilteredUsers: function () {
    return this.users.filter(function (user) {
         return user.status == this.currentFilter;
    });
    }
};

console.log(userService.getFilteredUsers());

```

---

## 277. Реализация AsyncQueue для последовательного выполнения асинхронных операций

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-asyncqueue-dlya-posledovatelnogo-vyipolneniya-asinhronnyih-operatsij-1

### Задача

Необходимо реализовать класс который позволяет выполнять функции последовательно, даже если они возвращают Promise
```javascript

const queue = new AsyncQueue();

queue.add(() => console.log("1"));
queue.add(
    () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("2");
            resolve();
        }, 1000);
    })
);
queue.add(() => console.log("3"));
queue.add(
    () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("4");
            resolve();
        }, 500);
    })
);

```

---

## 278. Типизация функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizatsiya-funktsii-3

### Задача

Необходимо типизировать функцию addProperty  для безопасного добавления свойств
```javascript

function addProperty(obj, key, value) {
    return { ...obj, [key]: value };
}

const original = { name: "Alice" };

const updated = addProperty(original, "age", 25);

console.log(updated);
// Output: { name: 'Alice', age: 25 }

```

---

## 279. Приведение типов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/privedenie-tipov-2-2

### Задача

Привести тип Man к типу AgeType
```javascript
 type Man = {
    name: string;
    age: Age;
}

// { age: Age; }
// type AgeType =

```

---

## 280. enum в Type

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/enum-v-type-1

### Задача

С помощью enum создрать NewType
```dart
 enum PaymentType {
    'idle',
    'inProgress',
}

type NewType
const payment: NewType = 'idle'

```

---

## 281. Реализация собственного метода фильтрации массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-sobstvennogo-metoda-filtratsii-massiva-1

### Задача

Необходимо написать собственный фильтр filter2(item => item % 2)
```javascript

const arr = [1, 2, 3, 4, 5];

const res1 = arr.filter(item => item % 2);
console.log(res1); // [1, 3, 5]

// const res2 = arr.filter2(item => item % 2);

```

---

## 282. Типизация объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizatsiya-obekta-1

### Задача

Написать тип для ManMapType
```javascript

 const mansMap: ManMapType = {
    'id1': {
    name: 'Karl',
    age: 18;
    },
    'id2': {
    name: 'Karl',
    age: 18;
    },
    ...
}

type Man = {
    name: string;
    age: Age;
}

type ManMapType = 

```

---

## 283. Поведение методов объекта при вызове через переменную

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-metodov-obekta-pri-vyizove-cherez-peremennuyu-1

### Задача

Необходимо исправить код чтобы вывелась 1
```javascript

const obj = {
    a: 1,
    show() {
        console.log(this.a)
    }
}

const f = obj.show;
f();

```

---

## 284. EventEmitter

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/eventemitter-1

### Задача

Реализовать класс EventEmitter с возможностью подписки на разные события и оповещения о событии всех подписчиков
```javascript

 // Базовый пример для проверки:

class EventEmitter {
    // Реализуйте класс, чтобы заработал код ниже
}

const emitter = new EventEmitter()

const cb1 = () => console.log('cb1')
const cb2 = () => console.log('cb2')

emitter
.on('event', cb1) // подписка коллбяка cb1 на событие 'event'
.on('event', cb2)
.emit('event') // срабатывание события 'event'
// 'cb1'
// 'cb2'
.off('event', cb2) // отписка коллбяка cb2 от события 'event'
.emit('event')
// 'cb1'

```

---

## 285. Подсчет уникальных элементов в массиве с объектами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/podschet-unikalnyih-elementov-v-massive-s-obektami-1

### Задача

Необходимо написать функцию которая принимает массив и возвращает объект ключами которого являются элементы массива, а значениями количество их появлений
```javascript

const mixedArray = [1, "1", { a: 1 }, { a: 1 }, 1, "test", "test"];

const countElements = () => {};

const counts = countElements(mixedArray);
console.log(counts);

// "1": { value: 1, count: 2 },
// ""1": { value: "1", count: 1 },
// "{"a":1}": { value: { a: 1 }, count: 2 },
// ""test": { value: "test", count: 2 }

```

---

## 286. useFirstRender

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/usefirstrender-1

### Задача

Реализовать хук useFirstRender
```javascript
 const useFirstRender = () => { }
 
function RenderAfterFirstRender(props) {
    const isFirstRender = useFirstRender();

    if (isFirstRender) {
    return "Haviero";
    }

    return props.children;
}

export default () => {
    const [hookContent, setHookContent] = useState(1);

    const changeHookContent = () => {
    setHookContent(hookContent + 1);
};

return <div>
    <section>
    <h2>Hook</h2>

    <p>Peanw3O8aTb xyrx useFirstRender</p>

    <RenderAfterFirstRender>Pengep m{hookContent}</RenderAfterFirstRender>

    <div>
    <button onClick={changeHookContent}>next render</button>
    </div>
    </section>
</div>
)

```

---

## 287. Своя реализация filter

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-filter-2

### Задача

Реализовать функцию filter, которая принимает два параметра: массив и функцию обработчик
```javascript

 const filter = (arr, fn) => { };

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// Example 2:

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i == 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0
// Example 3:

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out

```

---

## 288. Вывод в консоль №66

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-46

### Задача

В каком порядке будут выведены console.log
```javascript

console.log('1');
setTimeout(() => {
    console.log('2');
});

new Promise((res, rej) => {
    console.log('3');
    res();
}).then(() => {
    console.log('4');
});

Promise.resolve().then(() => {
    console.log('5');
}).then(() => {
    console.log('6');
});

Promise.resolve().then(() => {
    console.log('7');
}).then(() => {
    console.log('8');
});

```

---

## 289. Функция проверки результата

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-proverki-rezultata-1

### Задача

Реализовать функцию expect с двумя методами: toBe() и notToBe().
```javascript

 const expect = (val) => {

};

/**
  * expect(5).toBe(5); // true
  * expect(5).notToBe(5); // throws "Equal"
    */
    %

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

```

---

## 290. Подсчёт количества вхождений элементов в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/podschyot-kolichestva-vhozhdenij-elementov-v-massive-2

### Задача

Необходимо написать функцию которая принимает массив чисел и возвращает объект с ключом число, а значение количество вхождений в массив
```javascript

function countOccurrences(arr) {}
console.log(countOccurrences([1, 2, 2, 3, 3, J])); // { 1: 1, 2: 2, 3: 3 }

```

---

## 291. Функция сложения данных в Promise

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-slozheniya-dannyih-v-promise-1

### Задача

Написать функцию addTwoPromises, которая принимает два Promise.resolve() с числами внутри и возвращает сумму этих чисел
```javascript

 const addTwoPromises = async (promise1, promise2) => { };

console.log()

/* */

* addTwoPromises( Promise.resolve(2), Promise.resolve(2 ) )
* .then( console.log ); // 4
*/

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The return

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The return

```

---

## 292. Функция сжатия строки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-szhatiya-stroki-1

### Задача

Написать функцию, которая сжимает строку. Символы которые повторяются несколько раз подряд сжимаются до символа и числа повторений без лишних знаков
```

 //Есть строка со множеством повторяющихся букв:

//ААААВВВССХУZDDDDEEFFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBB

//Нужно ее сократить, что бы получилось так:

//A4B3C2XYZD4E3F3AGB28

```

---

## 293. Вывод в консоль №67

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-47

### Задача

В каком порядке будут выведены console.log
```javascript

console.log('1');
setTimeout(() => {
    console.log('2');
});
new Promise((res, rej) => {
    console.log('3');
    res();
}).then(() => {
    console.log('4');
});
Promise.resolve().then(() => {
    console.log('5');
}).then(() => {
    console.log('6');
});
Promise.resolve().then(() => {
    console.log('7');
}).then(() => {
    console.log('8');
});
console.log('9');

```

---

## 294. Функция возведения в квадрат

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vozvedeniya-v-kvadrat-1

### Задача

Дан массив целых чисел в порядке возрастания, нужно возвести каждое число в квадрат, сохранив оригинальную сортировку, проделав все это за один проход

---

## 295. Пустой ли объект

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/pustoj-li-obekt-1

### Задача

Реализовать функцию, которая принимает массив или объект, и если был передан массив, возвращает "Пустой массив не содержит элементов", а если объект - "Пустой объект не содержит пар ключ-значение"

---

## 296. Функция определения палиндрома

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-opredeleniya-palindroma-1

### Задача

Необходимо написать функцию которая принимает строку и определяет является ли данная строка палиндромом

---

## 297. Подсчёт количества вхождений элементов в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/podschyot-kolichestva-vhozhdenij-elementov-v-massive-2-2

### Задача

Реализовать функцию countOccurrences для подсчёта количества вхождений элементов в массиве
```javascript

function countOccurrences(arr) {}
console.log(countOccurrences([1, 2, 2, 3, 3, 3])); // [ 1: 1, 2: 2, 3: 3 ]

```

---

## 298. Раскрытие массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/raskryitie-massiva-1

### Задача

Есть массив с n количеством вложенности в массив
Необходимо написать функцию которая раскроет все массивы и создаст один одноуровневый массив
```javascript

const arr = [1, 2, '3", null, 4, ''5", "test", 5, [null, null, 5]()];

```

---

## 299. Счетчик шуток

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/schetchik-shutok-1

### Задача

Создайте компонент, который будет отображать случайные шутки о программировании. У пользователя должна быть возможность кликать на кнопку, чтобы загружать новую шутку.
Требования:
1. На старте приложение показывает кнопку "Получить шутку!"
2. После клика на кнопку, компонент делает запрос к открытому API с шутками, например, [Official Joke API](https://www.joke.com/login.php?id=3)
3. После получения шутки она отображается на экране над кнопкой.
4. Если API не отвечает или возвращает ошибку, показывайте сообщение об ошибке.
Дополнительно (по желанию):
- Добавьте анимацию или спиннер при загрузке шутки.
- Вынести логику в кастомный хук.

---

## 300. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { Component } from "react";

export default class App extends Component {
    onClick = (event) => {
        this.setState({ event });
    });

    logEvent = () => {
        console.log(this.state.event.target);
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me</button>
                <button onClick={this.logEvent}>log event</button>
            </div>
        );
    }
}

```

---

## 301. Своя реализация Promise

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-promise-4

### Задача

Написать класс Deffered имитирующий работу Promise
```javascript
 class Deferred {}

const deferred = new Deferred((resolve) => {
    setTimeout(() => {
    resolve();
    }, 1000);
})
.then(() => {
    console.log("======");
})
.then(() => {
    console.log("last");
});

```

---

## 302. Инвертирование бинарного дерева

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/invertirovanie-binarnogo-dereva-1

### Задача

Для корня дерева root, инвертировать дерево и вернуть root.
```javascript

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

Примеры:
      1           1
     / \         / \
    2   3  =>   3   2
        1           1
       / \         / \
      2   3  =>   3   2
     / \ / \     / \ / \
    4  5 6 ?    ? 6 5  4

```

---

## 303. Функция нормализации объектов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-normalizatsii-obektov-2

### Задача

Написать функцию, которая принимает массив объектов и возвращает массив нормализированных объектов
```javascript

 const data = [
    { id: 1, name: "siberia can code 💬" },
    { id: 2, body: { name: "siberia can code 💬" } },
    { id: 3, type: "person", name: "siberia", lastname: "can code 💬" }
];

const flatData = (data) => data.map(item => {
    return {
        id: item.id,
        name: item.name || item.body?.name || `${item.name} ${item.lastname}`
    };
});

// Ожидаемый результат:
// [
//     { id: 1, name: "siberia can code 💬" },
//     { id: 2, name: "siberia can code 💬" },
//     { id: 3, name: "siberia can code 💬" }
// ]

```

---

## 304. Вывод в консоль №16

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-48

### Задача

Определить что будет выведено в консоль
```javascript
 setTimeout(() => new Promise((res) => { console.log(3); res(null); }).then(() => console.log(4)) });

setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(1));

console.log(6);

setTimeout(() => console.log(7)); console.log(2);

```

---

## 305. Нахождение разницы элементов между двумя массивами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/nahozhdenie-raznitsyi-elementov-mezhdu-dvumya-massivami-1

### Задача

Даны 2 числовых массива nums1 и nums2, вернуть массив answers, состоящий из двух массивов:

answers[0]: массив чисел из nums1, не представленных в nums2;
answers[1]: массив чисел из nums2, не представленных в nums1;

Примеры:
Вход: nums1 = [1,2,3], nums2 = [2,4,6]
Выход: [[1,3],[4,6]]

Вход: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Выход: [[3], []]

---

## 306. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-12

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { useEffect, useState } from "react";
import "./index.css";
import PostComponent from "./Post";

Codeium: Refactor | Explain | Generate JSDoc |
export default function App() {
    const posts_list = [
    {
    id: "1",
    name: "siberia can code ㈠",
    imggesrc: "https://avatars.githubusercontent.com/u/45297354?v=4",
    text: "first post",
    },
    {
    id: "2",
    name: "theo",
    imggesrc: "https://avatars.githubusercontent.com/u/6751787?v=4",
    text: "second post",
    },
    {
    id: "3",
    name: "dan abramov",
    imggesrc: "https://avatars.githubusercontent.com/u/810438?v=4",
    text: "third post",
    ],
};

const [selectedId, setPostId] = React.useState(@);
const [Post, setSelectedPost] = React.useState(posts_list[0]);
console.log("@", selectedId);

useEffect(() => {
    setSelectedPost(posts_list[selectedId]);
}, [selectedId]);

return (
    <div className="App">
        <div>selected user:</div>
        <div className="user">
            <img
                className={"avatar"}
                src={Post.imagesrc}
                style={{ width: "30px" }}}
            />
            {Post.name}
        </div>
        <br />
        <br />
        <br />
        <div>posts_list</div>
        {posts_list.length
            ? posts_list.map((el, index) => (
                <PostComponent data={el} onClick={() => setPostId(index)} />
            })
            : []
        }
    </div>
);

```

---

## 307. Подсчёт количества целых чисел в многомерном массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/podschyot-kolichestva-tselyih-chisel-v-mnogomernom-massive-1

### Задача

Дан многомерный целочисленный массив, необходимо вернуть количество целых чисел внутри массива.
```javascript

// Примеры:
// console.log(getCountNum([[[][]]])); // 0
// console.log(getCountNum([[0, [1, [5, [4, 3], 1], 1]])); // 7
// console.log(getCountNum([[[[1], 2], 3, 4, [1, [5, 3, 0, [6, 7]]]]));

```

---

## 308. Вывод в консоль №17

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-49

### Задача

Определить что будет выведено в консоль
```javascript
 Promise.resolve().then(() => console.log(1));

console.log(2);

setTimeout(() =>
    new Promise((res) => {
    console.log(3);
    res(null);
    }).then(() => console.log(4))
};

setTimeout(() => console.log(5));

console.log(6);

setTimeout(() => console.log(7));

```

---

## 309. Функция нормализации объектов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-normalizatsii-obektov-2-2

### Задача

Написать функцию, которая принимает массив объектов и возвращает массив нормализированных объектов
```javascript

 const data = [
    { id: 1, name: "siberia can code 💬" },
    { id: 2, body: { name: "siberia can code 💬" } },
    { id: 3, type: "person", name: "siberia", lastname: "can code 💬" }
];

const flatData = (data) => data.map(item => {
    return {
        id: item.id,
        name: item.name || item.body?.name || `${item.name} ${item.lastname}`
    };
});

// Ожидаемый результат:
// [
//     { id: 1, name: "siberia can code 💬" },
//     { id: 2, name: "siberia can code 💬" },
//     { id: 3, name: "siberia can code 💬" }
// ]

```

---

## 310. Удаление элементов массива, присутствующих в другом массиве, с сохранением порядка

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/udalenie-elementov-massiva-prisutstvuyuschih-v-drugom-massive-s-sohraneniem-poryadka-1

### Задача

Даны два массива. Необходимо написать функцию, которая сравнит эти два массива и удалит все значения из массива a, которые присутствуют в массиве b, сохранив их порядок.
```javascript

// Примеры:
// console.log(function([0, 2, 2, 2, 4], [2])); // [0,4]
// console.log(function([1, 2, 2], [1])); // [2,2]
// console.log(function([0, 2, 3], [1, 2])); // [0,3]

```

---

## 311. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-13

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { useEffect, useState } from "react";
import "./index.css";
import PostComponent from "./Post";

Codeium: Refactor | Explain | Generate JSDoc |
export default function App() {
    const posts_list = [
    {
    id: "1",
    name: "siberia can code ㈠",
    imggesrc: "https://avatars.githubusercontent.com/u/45297354?v=4",
    text: "first post",
    },
    {
    id: "2",
    name: "theo",
    imggesrc: "https://avatars.githubusercontent.com/u/6751787?v=4",
    text: "second post",
    },
    {
    id: "3",
    name: "dan abramov",
    imggesrc: "https://avatars.githubusercontent.com/u/810438?v=4",
    text: "third post",
    ],
};

const [selectedId, setPostId] = React.useState(@);
const [Post, setSelectedPost] = React.useState(posts_list[0]);
console.log("@", selectedId);

useEffect(() => {
    setSelectedPost(posts_list[selectedId]);
}, [selectedId]);

return (
    <div className="App">
        <div>selected user:</div>
        <div className="user">
            <img
                className={"avatar"}
                src={Post.imagesrc}
                style={{ width: "30px" }}}
            />
            {Post.name}
        </div>
        <br />
        <br />
        <br />
        <div>posts_list</div>
        {posts_list.length
            ? posts_list.map((el, index) => (
                <PostComponent data={el} onClick={() => setPostId(index)} />
            })
            : []
        }
    </div>
);

```

---

## 312. Группировка анаграмм из массива слов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/gruppirovka-anagramm-iz-massiva-slov-1

### Задача

Дан массив, все анаграммы собрать в модули  [["вертикаль", "компактер"], ["апельсин", "спанислы"], ...]
```javascript


const arr = [
    "вертикаль",
    "компактер",
    "апельсин",
    "спанислы",
    "австралистик",
    "ватерполистка",
    "кластер",
    "стансер",
    "стража",
    "корибль"
];

```

---

## 313. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-14

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { useState } from "react";
import "./index.css";
import Todo from "./Todo";

export const todo_list = [
{
    name: "clear",
    id: "1",
    imagesrc: "https://avatars.githubusercontent.com/u/45297354?v=4",
    },
    {
    name: "buy",
    id: "2",
    imagesrc: "https://avatars.githubusercontent.com/u/6751787?v=4",
    },
    {
    name: "change", id: "3",
    name: "code", id: "4",
    name: "test", id: "5",
    },
};

Codeium: Refactor | Explain | Generate JSDoc
export default function App() {
    const [search, setsearch] = React.useState("");
    return (
    <div className="App">
    <input
    type="text"
    value={search}
    onChange={(data) => setsearch(data.target.value)}  
    />  

    {todo_list  
        .filter((todo) => todo.name.includes(search))  
        .map((el) => (  
        <Todo todo={el} />  
        )})  
    </div>  
};

```

---

## 314. Поиск максимальной суммы пути в бинарном дереве с однократным посещением вершин

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-maksimalnoj-summyi-puti-v-binarnom-dereve-s-odnokratnyim-posescheniem-vershin-1

### Задача

Необходимо реализовать функцию, которая будет искать сумму максимального пути
  в котором каждая вершина может быть пройдена всего 1 раз. Путь может быть
  любым, необязательно от корня и до листа. В примере ниже максимальным путем
  будет путь (5 → -3 → 20 → с суммой 30

        (-10)
         /
      (9)   (20)
           /   \
        (-3)   (8)
         /     / \
      (5)  (-4)  (-2)
       /
    (-2)

function getMaxPathSum(root) {}

---

## 315. Скидка на продкуты

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/skidka-na-prodkutyi-1

### Задача

Написать функцию, которая принимает фрукты(массив объектов) и скидку(объект) и высчитывает стоимость товаров с учетом скидки
```javascript
 function calculateTotal(products, discount) {}

const discountPercentage = { fruit: 10, vegetable: 30 };
const result = calculatedTotal(products, discountPercentage);

console.log("receipt", result);
// "receipt", {
    "totalWithoutDiscount": 40,
    "totalWithDiscount": 32,
    "discount": {
    "fruit": 10,
    "vegetable": 30
    },
    "items": [
    {
    "id": 1123,
    "price": 20,
    "name": "apple",
    "color": "red",
    "category": "fruit"
    },
    {
    "id": 4322,
    "price": 20,
    "name": "apple",
    "ferm": "siberia",
    "category": "vegetable"
    }
    }
}

```

---

## 316. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-15

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { FC } from "react";
import "./styles.css";

import { AppProvider, useApp } from "./use-app";
import { fibonacci } from "./fibonacci";

const ComplexComponent: FC<{ number: number }> = ({ number }) => {
    console.log("ComplexComponent render");

    const { increment } = useApp();
    const expensiveComputationsResult = fibonacci(number);

    return (
    <div>
    result is: {expensiveComputationsResult}
    <button onClick={increment}>increase count</button>

const Clock = () => {
    console.log("Clock render");
    const { now } = useApp();
    return (
    <h1>
    {new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
    });
    }).format(now))
    </h1>
    );
};

const Count = () => {
    console.log("Count render");
    const { count } = useApp();
    return <div>You clicked {count} times</div>;
};

const OtherComponent = () => {
    console.log("OtherComponent");
    return <div>OtherComponent</div>;
};

export default function App() {
    return (
    <AppProvider>
    <h1>Improve perf & reduce rendres count</h1>
    <p>
    Using current tech stack, improve performance using various react optimizations techniques
    </p>
    }
    <hr style={{ marginBottom: 24 }} />
    <ComplexComponent number={38}/>
    <Clock/>

</p>

<hr style={{ marginBottom: 24 }} />

<ComplexComponent number={38} />
<Clock />
<Count />
<OtherComponent />
</AppProvider>

};

```

---

## 317. Вывод в консоль №18

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-52

### Задача

Определить что будет выведено в консоль
```javascript
 let obj = {
    "0": 1,
    ?: 2,
};

// console.log(obj["q"] + obj[0] );

```

---

## 318. Нахождение ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/nahozhdenie-oshibki-v-kode-1

### Задача

Найди ошибку в коде
```javascript

type Metadata = {}

type UserMetadata = Map<string, Metadata>;

const cache: UserMetadata = new Map();

console.log(cache.get('foo'));

const cacheCopy: UserMetadata = {...cache};

console.log(cacheCopy.get('foo'));

```

---

## 319. Вывод в консоль №19

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-51

### Задача

Определить что будет выведено в консоль
```javascript

 // let name = "Baca";
// function sayHi() {
    console.log(name);
    }
}
// setTimeout(function() {
    let name = "Петя";
    sayHi();
    }, 1000);

```

---

## 320. Вывод в консоль №68

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-53

### Задача

Что выведится в консоль
```javascript

console.log(new Date(2000,1,1) == new Date(2000,1,1)) 


```

---

## 321. Вывод в консоль №20

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-54

### Задача

Определить в каком порядке будут выведены цифры
```javascript

 // console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);

```

---

## 322. Вывод в консоль

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-55

### Задача

Что выведится в консоль
```javascript

console.log(new Date(2000,1,1) == new Date(2000,1,1)) 


```

---

## 323. Проверка на анаграмму

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/proverka-na-anagrammu-1

### Задача

Написать функцию, которая проверяет являются ли две строки анаграммами, при чем регистр не имеет значения. Учитваются лишь символы, пробелы или знаки препинания не должны учитываться

---

## 324. Вывод в консоль №69

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-56

### Задача

Что выведится в консоль
```javascript

const array = [1,2,3];

const array2 = array.forEach(item => item * 2).filter(item => item > 2);
console.log(array2) // ?

```

---

## 325. Проверка на палиндром

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/proverka-na-palindrom-1

### Задача

Написать функцию, которая принимат строку и возвращает true или false в зависимости от того, является строка палиндромом или нет. При этом пробелы и знаки препинания должны учитываться

---

## 326. Сброс состояния

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sbros-sostoyaniya-1

### Задача

Реализовать сброс состояния при нажатии на кнопку toggle page
```javascript
 import React, { useState, FC } from "react";

const Clicked: React.FC<{ count: number }> = ({ count }) => {
    return <p>Clicked: {count}</p>;
};

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div>
            <button onClick={increment}>Click me!</button>
            <Clicked count={count} />
        </div>
    );
};

const Page: FC<{ page: string }> = ({ page }) => {
    return (
        <div>
            page: {page}
            <Counter />
        </div>
    );
};

export const SwitchView = () => {
    const [viewState, setViewState] = useState<"one" | "two">("one");

    return (
        <>
            <button
                onClick={() => setViewState((prev) => (prev === "one" ? "two" : "one"))}
            >
                toggle page
            </button>
            <Page page={viewState} />
        </>
    );
};

```

---

## 327. Типизация функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizatsiya-funktsii-3-2

### Задача

Необходимо типизировать входной аргумент функции createNewTodo
```javascript

interface Todo {
    id: number;
    title: string;
    done: boolean;
}

const createNewTodo = (todo: any) => {
    const id = uscId();
    return ({
        ...todo, id
    }
}

```

---

## 328. Реализация Promise.all №3

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-promiseall-3

### Задача

Написать свою реализацию Promise.all
```javascript

 const test: number[] = Array.from(Array(5), (_, index) => index);

const promises = test.map((item, index) => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(index), index * 100));
});

// promises.push(new Promise((resolve, reject) => reject('MyError')));
const promiseAll = () => {

};

// promiseAll(promises).then(data => console.log(data));

```

---

## 329. Каррирование

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/karrirovanie-1

### Задача

Написать функцию, которая принимает три числа с помощью каррирования и возвращает их сумму

---

## 330. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-2

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { useState, useEffect } from "react";

// Имитация запроса к серверу
const fetchCall = () => Promise.resolve(Math.random());

const NumberAndScrollX = () => {
    const [number, setNumber] = useState(0);
    const [scroll, setScroll] = useState(0);

    useEffect(async () => {
        setNumber(await fetchCall());
    }, []); // Пустой массив зависимостей для выполнения эффекта только при монтировании

    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Очистка эффекта при размонтировании

    return (
        <div>
            <div>Number: {number}</div>
            <div>ScrollY: {scroll}</div>
        </div>
    );
};

export default NumberAndScrollX;

```

---

## 331. Вывод в консоль

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-57

### Задача

Определить что будет выведено в консоль
```


var b = 3;

function c() {
    let b = 4;
    a = 2;
}

c();

console.log(a); // ?
console.log(b); // ? 

```

---

## 332. Поиск маршрута перелёта (обход графа в глубину)

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-marshruta-perelyota-obhod-grafa-v-glubinu-1

### Задача

Написать поиск составных авиабилетов
Необходимо написать функцию, которая найдет любую цепочку перелетов из пункта вылета в пункт назначения.
Функция принимает на вход пункт вылета, пункт назначения и функцию поиска билетов.
Функция должна вернуть промис, который зарезолвится - массивом из всех остановок
(например, [’A’, ’B’, ’C’]); - или строкой ’no way’, если до пункта назначения добраться нельзя.
Гарантируется, что составной авиабилет или отсутствует или единственно возможный (нет ромбовидных перелетов).
Нельзя искать несколько билетов параллельно. Нельзя использовать async/await и генераторы.
```javascript
const flights = [
  ['A', 'B'],
  ['A', 'С'],
  ['A', 'D'],
  ['A', 'O'],
  ['D', 'K'],
  ['D', 'L'],
  ['D', 'M'],
  ['M', 'Q'],
  ['M', 'Z'],
  ['O', 'P'],
  ['L', 'G'],
  ['L', 'F'],
  ['F', 'Y'],
];

findPath('A', 'N', fetchFlighting).then(console.log) // Promise.resolve(['A', 'D', 'N'])
findPath('A', 'Q', fetchFlighting).then(console.log) // Promise.resolve(["A", "D", "M", "Q"])
findPath('A', 'W', fetchFlighting).then(console.log) // 'no way'

```

---

## 333. Вывод в консоль №22

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-58

### Задача

Определить что будет выведено в консоль
```javascript

var user = {
  name: "Ivan",
  hi() {
    console.log(this.name)
  }
}

user.hi() // ?

```

---

## 334. Вывод в консоль №23

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-59

### Задача

Определить что будет выведено в консоль
```javascript
 console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

```

---

## 335. React-компонент конвертер курсов валют

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/react-komponent-konverter-kursov-valyut-1

### Задача

Конвертер курсов валют. Необходимо написать React-компонент, который представлен двумя зависимыми полями ввода ("RUB"
и "USD") и кнопкой между ними ("<->")
При изменении значения в 1-м поле - меняется значение в 2-м (если в поле "RUB" ввести 150, значение в поле "USD" должно
стать 1)
При нажатии на кнопку - поля меняются местами (поле "RUB" становится 2-м, а поле "USD" - 1-м, и наоборот), и 2-е поле
блокируется
Курс валют может отличаться в зависимости от направления конвертации (например, 150 RUB = 1 USD, но 1 USD = 75 RUB)

---

## 336. Своя реализация map

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-map-3-3

### Задача

Написать свою реализации метода map

---

## 337. Своя реализация useRef

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-useref-1

### Задача

Написать свою реализацию хука useRef

---

## 338. React-компонент списка пользователей

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/react-komponent-spiska-polzovatelej-1

### Задача

1. Загрузить данные пользователей с https://jsonplaceholder.typicode.com/users
2. Отобразить список email'ов пользователей (<ul>)
3. При клике на email открывать модальное окно (<dialog>)
4. В модальном окне отображать:
   - Заголовок с именем пользователя (<header>)
   - Секцию с информацией (<section>):
   - Кнопку закрытия (<footer>)
5.  В рабочей области модалки нужно вывести списком:
    * email
    * username
    * полный адрес (все поля)

---

## 339. Функция объединения значений

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-obedineniya-znachenij-1

### Задача

Написать функцию, либо последовательность операций, которая вернет результат следующих условий:
результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке символов,
результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
результат не содержит одинаковых символов
```javascript

 const input = [
  { value: 'abcd', order: 4, expired: false },
  { value: 'qwer', order: 2, expired: true },
  { value: 'xyz1', order: 1, expired: false },
  { value: 'abx2', order: 3, expired: false },
];

```

---

## 340. Вывод в консоль №24

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-60

### Задача

Определить порядок вывода в консоль
```javascript
 const run = () => {
  setTimeout(() => {
    console.log('timeOut');
  }, 0);

  console.log(1);

  new Promise((resolve) => {
    console.log('Promise');
    setTimeout(() => {
      console.log('777');
      resolve();
    }, 0);
  })
    .then(() => {
      console.log('then1');
    })
    .then(() => {
      console.log('then2');
    });

  console.log(4);

  setTimeout(() => {
    console.log('timeOut2');
  }, 0);
};

```

---

## 341. Типизация массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizatsiya-massiva-1

### Задача

Протипизировать массив, который может быть любого уровня вложенности

---

## 342. Ограничение времени выполнения асинхронной функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ogranichenie-vremeni-vyipolneniya-asinhronnoj-funktsii-1

### Задача

Ограничение времени выполнения асинхронной функции

Функцию, которая принимает два аргумента — асинхронную функцию и временной лимит в миллисекундах. Функция должна возвращать новую версию асинхронной функции, выполнение которой ограничено временным лимитом.

Если время выполнения исходной функции не превышает временного лимита, то новая функция должна вернуть результат выполнения асинхронной функции.
Если время выполнения исходной функции больше временного лимита, то новая функция должна вернуть сообщение: "Превышен лимит времени исполнения".
Примеры:
```javascript
const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n + n;
}

asyncLimit(fn, 50); // rejected; "Превышен лимит времени исполнения"
asyncLimit(fn, 150); // resolved; 25

const fn2 = async (a, b) => {
    await new Promise(res => setTimeout(res, 120));
    return a + b;
}

asyncLimit(fn2, 100)(1, 2); // rejected; "Превышен лимит времени исполнения"
asyncLimit(fn2, 150)(1, 2); // resolved; 3

```

---

## 343. Определение типа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/opredelenie-tipa-2

### Задача

Определить чему будет равен тип Result
```javascript
 type ExampleType = {
  Field1: string
  Field2: string
  Field3: number
  Field4: boolean
}

type T1<S, T> = {
  [K in keyof S]: S[K] extends T ? K : never
}[keyof S];

type Result = T1<ExampleType, String>

```

---

## 344. Вывод в консоль №70

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-61

### Задача

Что выведется в консоль
```javascript
Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "c")
  .then((p) => p + "d")
  .then((p) => console.log(p));

console.log("f");

```

---

## 345. Рефакторинг

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/refaktoring-11

### Задача

Исправить ошибку в коде
```javascript
 import React, { useState } from "react";

export default () => <div>Clicker</div>;

const heavyFunc = (count) => {
  // hard calculations
  // 10sec
};

const LazyInit = (props) => {
  const [count, setCount] = useState(heavyFunc(props.count));
  return (
    <>
      {count}
      <button onClick={() => setCount((prevProps) => ++prevProps)}>
        Increment
      </button>
    </>
  );
};

```

---

## 346. Вывод в консоль №25

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-62

### Задача

Определить что будет выведено в консоль
```javascript
 const userService = {
  currentFilter: 'active',
  users: [
    { name: 'Alex', status: 'active' },
    { name: 'Nick', status: 'deleted' },
  ],
  getFilteredUsers: function () {
    return this.users.filter(function (user) {
      return user.status === this.currentFilter;
    });
  }
};

console.log(userService.getFilteredUsers());

```

---

## 347. Реализация Promise.all №4

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-promiseall-3-2

### Задача

Написать свою реализацию функции Promise.all

---

## 348. Вывод в консоль №71

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-63

### Задача

Что выведется в консоль
```javascript
for(let i = 0; i < 1000000000; i++) {
    Promise.resolve('1').then(() => console.log('micro'));
    setTimeout(() => console.log('macro'));
}

```

---

## 349. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-16

### Задача

Найти и исправить ошибки в коде
```javascript
 import { useRef, useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef();

  const toggleInput = () => {
    setIsVisible(true);
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={toggleInput}>Show and focus input</button>
      {isVisible && <input ref={inputRef} type="text" />}
    </div>
  );
}

```

---

## 350. Приложение поиска по списку персонажей

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/prilozhenie-poiska-po-spisku-personazhej-1

### Задача

Создать приложение, с помощью которого можно искать по списку героев Documentation(rickandmortyapi.com)
Требования
Одно поле для ввода поискового запроса, запрашивать данные по вводу текста  
После получения ответа вывести список полученных сущностей (только name)  
Индикация состояния загрузки  
Обработать кейс когда апи отвечает ошибкой
```javascript

 import React from 'react';

function getPeople(name, page = 1, options = {}) {
  return fetch(
    `https://rickandmortyapi.com/api/character?name=${name}&page=${page}`,
    options
  ).then((res) => res.json());
}

export default function App() {
  return '20 minutes adventure!';
}

```

---

## 351. Вывод в консоль №72

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-64

### Задача

Что выведется в консоль
```javascript
const promise = new Promise((res) => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        res();
    }, 0);
    console.log(3);
});

promise.then(() => {
    console.log(4);
});

```

---

## 352. Исправить приложение на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-prilozhenie-na-react-1

### Задача

1. Умеет запросить текущую дату с сервера с помощью метода fetchDate из api.ts и вывести в компоненте. Работа с API уже написана как раз в api.ts. Там можно и ознакомится с тем, какие данные возвращает API.
2. Следит за изменением размера экрана и выводит текущую ширину экрана.
Учесть, что код может выполняться на мобильных устройствах.
Также необходимо реализовать и вывести компонент-счетчик. Компонент должен состоять из кнопки, клик по которой увеличивает счетчик. Рядом с кнопкой выводим текущее значение счетчика.
Все компоненты должны выводится по центру экрана
```javascript
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchDate } from "./api";
import "./styles/styles.css";

/**
  * Компонент для вывода серверного времени и высоты экрана
 */
const App = () => {
    const [count, setCount] = useState(0);
    // Дата
    const [date, setDate] = useState < string > ();
    const [clientWidth, setClientWidth] = useState < number > ();

    // @ts-ignore
    useEffect(async () => {
    setDate(await fetchDate());

    window.addEventListener("resize", () =>
        setClientWidth(document.body.clientWidth),
    )
  });

return (
    <div className = "App" >
        <div key="title">Server date: {date} </div>
        <div key="width">Client width: {clientWidth}px</div>
        <Counter
            value={count}
            onClick={() => {
                setCount(count + 1);
            }}
        />
    </div>
   );
};



/* 
* Компонент, который выводит кол-во кликов в кнопку */

function Counter(props: any) {
    console.log("CONNTER rendered [ ]");
    /**
    * Percentage было что-то много...
    * Решил мексизировать этот callback.
    * НЕ УДАЛЯЙТЕ МЕМОИЗАЦИЮ, ПОЖАЛУЙСТА!
    */
    const memoizedOnClick = useCallback(() => {
        props.onClick();
    },
    []);
    return (
        <div>
            <button onClick={memoizedOnClick}>+</button>&nbsp;
            {props.value || 0}
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

---

## 353. Функция генерации массива от 0 до N

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-generatsii-massiva-ot-0-do-n-1

### Задача

```javascript
function generateArray(n) {}

```

---

## 354. Функция получения случайного числа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-polucheniya-sluchajnogo-chisla-1

### Задача

Функция принимает два числа from и to, возвращает случайное число между ними

---

## 355. Функция для имитации задержки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-dlya-imitatsii-zaderzhki-1

### Задача

Функция имитирует задержку случайно от 1000 до 5000 мс

---

## 356. Фильтрация объектов по классу типов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/filtratsiya-obektov-po-klassu-tipov-1

### Задача

В решении учитывать что объектов может быть 
условно миллиард, а типов миллион, исходить из необходимости максимально снизить 
затраты по времени и ресурсам
Написать функцию вывода строкой через запятую названий (name) объектов
Брать только объекты связанные с типами у которых class="Устройства"
```javascript
//Объекты
const objects = [
  { id: 1, name: "Test 1", object_type: 1 },
  { id: 2, name: "Test 2", object_type: 1 },
  { id: 3, name: "Test 3", object_type: 2 },
  { id: 4, name: "Test 4", object_type: 3 },
]

//Типы
const object_types = [
  { id: 1, class: "Устройства" },
  { id: 2, class: "Устройства" },
  { id: 3, class: "Порты" },
  { id: 4, class: "Кабели" }
]

```

---

## 357. Вывод в консоль №26

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-65

### Задача

Определить что будет выведено в консоль
```javascript
 const a = { a: "a" };
const b = { b: "b" };
const c = {};

c[a] = a;
c[b] = b;

console.log(c[a].a, c[b].b);

```

---

## 358. Вывод в консоль №26

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-33

### Задача

Определить что будет выведено в консоль
```javascript
 const a = { a: "a" };
const b = { b: "b" };
const c = {};

c[a] = a;
c[b] = b;

console.log(c[a].a, c[b].b);

```

---

## 359. Вывод в консоль №27

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-50

### Задача

Определить что будет выведено в консоль
```javascript
 console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve(console.log(5)).then(() => console.log(6));

setTimeout(() => console.log(7));

console.log(8);

```

---

## 360. Функция отложенного вызова

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-otlozhennogo-vyizova-2

### Задача

Текстовый поиск с участием бэкенда (только эмуляция)
Реагируем на каждую набранную букву, но вызываем функцию поиска на бэк (callApi) 
только если пауза в наборе составила 1 секунду
- Использовать готовые библиотеки нельзя, делаем на голом js
- HTML форму реализовывать не надо, только реакцию на условный onChange(value)
- React окружение не использовать

---

## 361. Реализация функции sleep

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-funktsii-sleep-1

### Задача

Написать функцию sleep, которая принимает количество миллисекунд, и через заданное количество миллисекунд возвращает Promise

---

## 362. Реализация Promise.all №5

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-promiseall-3-3

### Задача

Написать свою реализацию функции Promise.all()

---

## 363. Проверка скобок

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/proverka-skobok-1

### Задача

Написать функию, которая проверяет скобки на правильность написания
```javascript
 function checkBrackets(str) {
}

// '({{}})'
console.log(checkBrackets('([](){{()}})')) // true
console.log(checkBrackets('()[{}]'))        // true
console.log(checkBrackets('({[})]'))        // false
console.log(checkBrackets('([[]))'))        // false
console.log(checkBrackets('{()}'))          // false

// Допущение: входная строка содержит только символы ()[]{}

```

---

## 364. Вывод в консоль №28

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-66

### Задача

Определить что будет выведено в консоль
```javascript
 export default function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

function Parent({ children }) {
  console.log(1);

  useEffect(() => {
    console.log(2);
  }, []);

  return <div>{children}</div>;
}

function Child() {
  console.log(3);

  useEffect(() => {
    console.log(4);
  }, []);

  return <h1>Hi</h1>;
}

```

---

## 365. Часы на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/chasyi-na-react-1

### Задача

Реализовать часы, которые показывают текущее время и обновляются каждую секунду. При удалении компонента, нужно вызвать функцию logMetric и передать в нее последнее время, показанное пользователю
```javascript

 function logMetric(date: string) {
  fetch('/api/metric', date);
}

const Clock = () => {
  const [currentDate, setCurrentDate] = useState((new Date()).toISOString());

  return <h1>{currentDate}</h1>;
};

```

---

## 366. Группировка данных с сервера

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/gruppirovka-dannyih-s-servera-1

### Задача

Есть два эндпоинта - сообщения и комнаты. Необходимо запросить сообщения и комнаты и сгруппировать сообщения по дням
```javascript
 interface IRoom {
  id: number;
  name: string;
  type: string;
}

interface IMessage {
  roomId: IRoom['id'];
  id: number;
  text: string;
  ts: Date;
}

// // Эндпоинт GET '/rooms' возвращает IRoom[]
// // Эндпоинт GET '/messages' возвращает IMessage[]
// // Необходимо запросить сообщения и комнаты и сгруппировать сообщения по дням

type ProcessedMessage = Omit<IMessage, 'roomId'> & {
  roomName: IRoom['name'];
};

type ProcessedData = Record<string, ProcessedMessage>;

// // при этом строковый ключ – ISO представление даты начала дня ('2022-06-23T00:00:00')

// // Пример результата:
//
// '2023-03-23T00:00:00': { // ISO представление даты начала дня
//   "roomName": "Room name", // название комнаты из rooms
//   "id": 1,
//   "text": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "ts": Thu Mar 23 2023 12:15:15 GMT+0200 (Восточная Европа, стандартное время)
// }
// ...

```

---

## 367. Агрегация данных по регионам

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/agregatsiya-dannyih-po-regionam-1

### Задача

Получить объект с отчётом из массива
Функцию которая примет этот массив на вход и вернёт объект, 
который скажет сколько у меня субъектов в регионе 1 и сколько в регионе 2
Дополнительные объявления переменные-массивов использовать нельзя, 
нужен return {какое то действие создающее объект из массива}
Логику реализовать внутри этой функции getResult
```javascript
const Task2 = () => {
    interface ISubjectRegion { name: string, region: number }
    interface IResult { [key: ISubjectRegion['region']]: number }

    const sourceData: ISubjectRegion[] = [
        { name: "Субъект 1", region: 1 },
        { name: "Субъект 2", region: 2 },
        { name: "Субъект 3", region: 2 },
        { name: "Субъект 4", region: 2 },
        { name: "Субъект 5", region: 4 }
    ]

    const expectedResult: IResult = {
        1: 1, //1 субъект в регионе 1
        2: 3 //3 субъекта в регионе 2
    }

    //!!! Логику реализовать внутри этой функции !!!
    const getResult = (data: ISubjectRegion[]): IResult => {
      //TODO
    }
    // Это выведет результат её работы справа
    return { expectedResult, result: getResult(sourceData) }
}
// Вспомогательные функции
const showTaskResult = (task: number, taskResult: { result: any, expectedResult: any }) => {
    console.log(`---Результат задачи ${task}---`)
    console.log('Ожидаемый: ', taskResult.expectedResult)
    console.log('Из функции: ', taskResult.result)
    console.log('')
}

// Это выведет результат её работы справа
showTaskResult(2, Task2())

```

---

## 368. Выравнивание массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyiravnivanie-massiva-1

### Задача

Реализовать функцию выравнивания массива без использования Array.flat(). Максимальный уровень вложенности массива - 1000

---

## 369. Очередь из двух стеков

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ochered-iz-dvuh-stekov-1

### Задача

Реализовать очередь с помощью 2-х стеков
```javascript

 class Stack {
  constructor() {
    this.storage = [];
  }

  push(data) {
    this.storage.push(data);
  }

  pop() {
    return this.storage.pop();
  }

  size() {
    return this.storage.length;
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // Добавить в очередь
  enqueue(data)

```

---

## 370. Типизация объектов с известными endpoint-ключами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizatsiya-obektov-s-izvestnyimi-endpoint-klyuchami-1

### Задача

типизацию подходящую для двух объектов, не потерять типизацию "за" ключами 
в endpoints, то есть key:string и Record<string не подходят
Принять что сами ключи endpoints нам известны на этапе типизации каждого объекта: 
"getVtemplates" и "postVtemplates" для vtemplateObject
"getReports" и "putReports" для reportObject
```javascript
//-- 1 -- Задаёт структуру объектов, не знает про конкретные объекты и их методы


//-- 2 -- Не может менять базовый тип, но знает про структуру объекта который типизирует

const vtemplateObject = {
    entity: "vtemplate",
    endpoints: {
        getVtemplates: {
            method: "GET",
            url: "vtemplate"
        },
        postVtemplates: {
            method: "POST",
            url: "vtemplate"
        }
    }
}

const reportObject = {
    entity: "report",
    endpoints: {
        getReports: {
            method: "GET",
            url: "report"
        },
        putReports: {
            method: "PUT",
            url: "report"
        }
    }
};

```

---

## 371. Вывод в консоль №29

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-67

### Задача

Определить что будет выведено в консоль
```javascript
 Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "c")
  .then((p) => p + "d")
  .then((p) => console.log(p));

console.log("f");

```

---

## 372. Сортировка четных чисел в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-chetnyih-chisel-v-massive-1

### Задача

Написать функцию, которая принимает массив чисел и возвращает массив с отсортированными четными числами

---

## 373. Сортировка анаграмм

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-anagramm-1

### Задача

Написать функцию, которая принимает массив строк. Необходимо найти все анаграммы и вернуть отсортированный массив по числу повторений анаграмм

---

## 374. Мессенджер на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/messendzher-na-react-1

### Задача

Реализовать мессенджер внутри которого есть сообщения с счетчиком лайков и кнопкой лайка, инпут и кнопка "Отправить сообщение"

---

## 375. Вывод в консоль №30

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-68

### Задача

Определить что будет выведено в консоль
```javascript
 for (var i = []; i.length < 3; i.push(1)) {
  setTimeout(function () {
    // console.log(i);
  }, 1000);
}

```

---

## 376. Поиск пересечений интервалов с маркировкой

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-peresechenij-intervalov-s-markirovkoj-1

### Задача

Взять три разных набор отрезков, найти участки их пересечений и 
пометить как новые (например green и yellow имеют пересечение - пометить его 
как новый (см exampleResult4) и вырезать его и из green и из yelow), вывести 
информацию о последовательности отрезков с 0 до 100
```javascript
// Мнемоники отрезков
const Task4 = () => {
    type IMnemo = "green" | "yellow" | "red"
    //Тип для отрезка - начало и конец
    interface IInterval {
        start: number,
        end: number
    }
    type ISourceIntervals = Record<IMnemo, IInterval[]>

    //Тип ответа
    interface IExpectedResult extends IInterval {
        mnemo: IMnemo[],
    }
    //Исходные отрезки
    const sourceData: ISourceIntervals = {
        green: [{ start: 0, end: 30 }, { start: 90, end: 100 }],
        yellow: [{ start: 20, end: 40 }, { start: 50, end: 70 }],
        red: [{ start: 10, end: 50 }, { start: 70, end: 90 }],
    }

    //Ожидаемый результат
    const expectedResult: IExpectedResult[] = [
        { "mnemo": ["green"], start: 0, end: 10 },
        { "mnemo": ["green", "red"], start: 10, end: 20 },
        { "mnemo": ["green", "yellow", "red"], start: 20, end: 30 },
        { "mnemo": ["yellow", "red"], start: 30, end: 40 },
        { "mnemo": ["red"], start: 40, end: 50 },
        { "mnemo": ["yellow"], start: 50, end: 70 },
        { "mnemo": ["red"], start: 70, end: 90 },
        { "mnemo": ["green"], start: 90, end: 100 },
    ]

    // Реализовать внутри этой функции оптимальным способом, перебор исходного массива
    // может быть только один! Допускается формирования дополнительных массивов/объектов
    const getResult = (sourceIntervals: ISourceIntervals): IExpectedResult[] => {
        return expectedResult
    }

    //Это выведет результат её работы справа
    return { expectedResult: expectedResult, result: getResult(sourceData) }
}

//Вспомогательные функции
const showTaskResult =(task: number, taskResult: {result: any, expectedResult: any}) => {
    console.log(`---Результат задачи ${task}---`)
    console.log('Ожидаемый: ', taskResult.expectedResult)
    console.log('Из функции: ', taskResult.result)
    console.log('')
}


showTaskResult(4, Task4())

```

---

## 377. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-17

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { useState, useEffect } from "react";

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

// имитация запроса к серверу. просто получаем число асинхронно
const randomNumber = () => Promise.resolve(randomInteger(9000, 11000));

const testData = [];

export const randomList = () => {
  const [number, setNumber] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setNumber(await randomNumber());
      window.addEventListener("scroll", () => setScroll(window.scrollY));
      for (let i = 0; i < number; i++) {
        testData.push(randomInteger(0, 20));
      }
    };

    fetchData();

    return () => {
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  }, []);

  return (
    <div>
      <div>Количество справочников: {number}</div>
      <div>Scroll: {scroll}</div>
      <div>Список полученных значений</div>
      <div style={{ height: 400, overflowY: "hidden" }}>
        {testData.map((el, index) => (
          <div key={index}>
            <div>Справочник {index}</div>
            <div>{el}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

```

---

## 378. Проверка возможности составления строки из символов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/proverka-vozmozhnosti-sostavleniya-stroki-iz-simvolov-1

### Задача

Необходимо реализовать функцию scramble(str1, str2), которая возвращает true, если часть символов строки str1 может быть переставлена для соответствия строке str2. В противном случае функция должна возвращать false.
Примеры:
```javascript
scramble('scriptingjava', 'javascript') => true
scramble('abc', 'a') => true
scramble('abc', 'd') => false

```

---

## 379. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-18

### Задача

Найти и исправить ошибки в коде
```javascript
 import { useEffect, useLayoutEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';

interface Product {
    description: string;
    id: string;
    info: string;
    name: string;
}

type Shop = {
    coordinate: number[];    [
    id: string;
    name: string;
    priceList: Record<string, string>;
};

let counter = 10;
var started = false;

const AppTimer = () => {
    let currency = ' $';
    const [timer, setTimer] = useState(10);

    const onDecrease = () => {
        if (counter > 0) {
            counter--;
            setTimer(counter);
        }
    };

    useLayoutEffect(() => {
        if (!started) {
            setInterval(onDecrease, 1000);
        }
        started = true;
    });

    return (
        <div>
            <div className="Controls">{time}</div>
            {/* @ts-ignore */}
            <ProductList currency=(currency) />
        </div>
    );
};

const ProductList = ({ currency, error = false }: any) => {
    const [products, setProducts] = useState(Product[]>{[]};
    const [shops, setShops] = useState(Array<Shop>{[]});

    if (error) {
        return;
    }

    // @ts-ignore
    useEffect(async () => {
        const productsResponse = await fetch(
            'https://my-json-server.typicode.com/cyberwalrus/demo/products'
        );
        const productsJson = await productsResponse.json();

        setProducts(productsJson);
    }, [setProducts, setShops]);

    const getShops = (id: string) => {
        let array: any[] = []
        for (var i = 0; i < shops.length; i++) {
            const shop = shops[i];

            if (shop.priceList[id]) {
                array = [...array, shop];
            }
        }

        return array;
    };

    useLayoutEffect(() => {
        fetch('https://my-json-server.typicode.com/cyberwalrus/demo/shops'),
        .then((res) => res.json())
        .then((res) => setShops(res));
    }, []);

    return (
        <div className="productsWrapper">
            //" render products "/)
            {products.map((( name, description, id )) => ( <main className="products">
                <h1 className="products-Item_green">{name}</h1>
                <h5>{description}</h5>
                <hr />
                //" render shops list "/)
                <ul className="postList">
                    ((getSnops(id) as Shop[]).map((( name, priceList )) => ( <div className="post__header">
                        {name} -(' ')
                        {
                            Object.entries(priceList).find(
                                {[key]} => id === key
                            )).[1]
                        }
                        {currency}
                    </div>
                });
                </ul>
            </main>
        </div>
    };
};

createRoot(document.getElementById('root') as HTMLElement).render(<AppTimer />);

setTimeout(() => console.clear(), 1000);

```

---

## 380. Вывод в консоль №31

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-69

### Задача

Определить что будет выведено в консоль
```javascript
 import {
    FC,
    PropsWithChildren,
    useEffect,
    uselayoutEffect,
    useInsertionEffect,
} from 'react';
import './style.css';

const FirstComponent: FCCPropsWithChildren> = {{ children }} => {
    console.log('1', '?');

    useEffect(() => {
        console.log('2', '?');
    }, []
};

return (
    <header>
        chl>React Order Puzzle</hl>
        (children)
    </header>
);
});

const SecondComponent: FC = () => {
    console.log('3', '?');

    useEffect(() => {
        console.log('4', '?');
    }, []);

    uselayoutEffect(() => {
        console.log('5', '?');
    }, []);

    return (
        <h3>
            ref=(() => {
                console.log('6', '?');
            });
            
            You need to figure out what sequence the numbers are displayed in the console
        </h3>
    );
};

const ThirdComponent: FC = {} => {
    console.log('7', '?');

    useEffect(() => {
        console.log('8', '?');
    }, []
};

    useLayoutEffect(() => {
        console.log('9', '?');
    }, []
};

return (
    <div>
        <p>In this input, you can enter the order of numbers
        <input className="input" />
        </div>
    );
});

export const App: FC = {}
=> {
    useInsertionEffect(() => {
        console.log('10', '?');
    }, []
};

return (
    <main
        className="app"
        ref=(()) => {
            console.log('11', '?');
        })
        <FirstComponent>
            <SecondComponent />
        </FirstComponent>
        <ThirdComponent />
    </main>
    }
});

```

---

## 381. Рекурсивный обход файловой структуры

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/rekursivnyij-obhod-fajlovoj-strukturyi-1

### Задача

Функция, которая принимает файловую структуру, а
возвращает массив строк с маршрутами к каждому файлу. 
Вложенность может быть любая, на каждом уровне вложенности будет одна папка.
```javascript
/* входные данные */
const structure = [
  "a.js",
  "b.js",
  {
    src: [
      "some.js",
      "other.js",
      {
        components: ["someComponent.js"],
      },
    ],
  },
];

/*
  Ожидаемый результат:
  [
   'a.js',
   'b.js',
   'src/some.js',
   'src/other.js',
   'src/components/someComponent.js'
  ]
  */

const flatStructure = (array) => {

};

console.log(flatStructure(structure));

```

---

## 382. Вывод в консоль №32

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-70

### Задача

Определить что будет выведено в консоль
```javascript
 import './style.css';

document.getElementById('app').innerHTML = '
<h1>Async Puzzle</h1>
';
const func1 = async () => {
    console.log('1', '?');
    setTimeout(() => console.log('2', '?'), 0);

    Promise.resolve().then(() => console.log('3', '?'));

    const func2 = async () => {
    setTimeout(() => console.log('4', '?'), 1);
    console.log('5', '?');
    Promise.resolve().then(() =>
    setTimeout(() => console.log('6', '?'), 0)
});
const importValue = new Promise((res) => {
    console.log('7', '?'); [
    Promise.resolve().then(() => console.log('8', '?'));
    setTimeout(() => {
    res();
    },
    });
});

    await importValue;

    console.log('9', '?');
};

    Promise.resolve().then(() => console.log('10', '?'));

    await func2();

    console.log('11', '?');
};

    func1();

    console.log('12', '?');

```

---

## 383. Вывод в консоль №33

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-71

### Задача

Определить что будет выведено в консоль
```javascript
 import './style.css';

document.getElementById('app').innerHTML = '
<h1>Async Puzzle</h1>
';
const handleAsyncFirst = async () => {
    console.log('1'[]');
    requestIdleCallback(
    () => {
    console.log('2', '?');
    },
    { timeout: 1 }
});
    setTimeout(() => {
    console.log('3', '?');
}, 100);

const dateStart = Date.now();
let dateNow = Date.now();

while (dateNow <= dateStart + 200) {
    dateNow = Date.now();
}

queueMicrotask(() =>
    Promise.resolve().then(() => {
    console.log('4', '?');
    })
});

const handleAsyncSecond = async () => {
    setTimeout(() => {
    console.log('5', '?');
});

const importantValue = new Promise((res) => {
    console.log('6', '?');

    Promise.resolve().then(() => {
    console.log('7', '?');
});

requestAnimationFrame(() => {
    console.log('8', '?');
});

setTimeout(() => {
    console.log('9', '?');
    res();
}, 100);

});

await importantValue;

console.log('10', '?');

setTimeout(() => console.log('11', '?'));

queueMicrotask(() => {
    console.log('12', '?');

    setTimeout(() => console.log('13', '?');

    Promise.resolve().then(() => console.log('14', '?'));
});

await handleAsyncSecond();

console.log('15', '?');

};

Promise.resolve().then(() => console.log('16', '?'));

handleAsyncFirst();

console.log('17', '?');

```

---

## 384. Функция расчета стоимости проживания посетителя в отеле

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-rascheta-stoimosti-prozhivaniya-posetitelya-v-otele-1

### Задача

Оплата за проживание в отеле
Функция принимает 2 аргумента
1. Количество ночей проживания в отеле (обязательный параметр)
2. Дата заселения (необязательный параметр). Если значение не указано, то отсчет ведется от текущего дня
Стоимость проживания в будние дни (с понедельника по пятницу) стоит 1200 руб.
Стоимость проживания в выходные дни (суббота, воскресенье) стоит 2000 руб.
```javascript
const prices = {
    weekday: 1200,
    holidays: 2000,
};

function bookingCalculate(dayAmount, date) {
    let sum = 0;
    return sum;
}

console.log(bookingCalculate(7)); // 31000
console.log(bookingCalculate(3, new Date("2023-11-10"))); // 5000

```

---

## 385. Продуктовая корзина на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/produktovaya-korzina-na-react-1

### Задача

1. Отрисовать корзины с продуктами используя <Cart />.
2. Добавить обработку чекбокса для того чтобы показывать только фрукты.
Список фруктов перечислен в массиве PRODUCTS.
3. Посчитать суммарную стоимость и количество всех продуктов. Чекбокс нужно тоже учитывать.
```javascript
 import "/styles.css";

export default function App() {
    return [
    <div className="wrapper">
    <div>
    <input type="checkbox" id="isFruit" />
    Показывать только фрукты
    </div>
    <div>
    Общее количество: <span></span>
    </div>
    <div>
    Общая цена: <span></span>
    </div>
    <div>Список продуктов:</div>
    <div className="cart-wrapper">
    <Cart name="Apple" price=(10) count=(5) />
    </div>
    </div>
}

interface IProps {
    name: string;
    price: number;
    count: number;
}

export const Cart = {{ name, price, count }}; IProps) => {
    return (
    <div className="cart">
    <div className="cart-item">
    <p>Hassname:</p><p>{name}</p>
    </div>
    <div className="cart-item">
    <p>Cywwa:</p><p>{price}</p>
    </div>
    <div className="cart-item">
    <p>Konw+ecTBO:</p><p>{count}</p>
    </div>
    </div>
});

import type { IProduct } from './models'
{
export const PRODUCTS: IProduct[] - [
{
    name: "apple",
    price: 10,
    count: 10,
    ],
    {
    name: "banana",
    price: 20,
    count: 20,
    ],
    {
    name: "orange",
    price: 30,
    count: 30,
    ],
    {
    name: "bread",
    price: 50,
    count: 50,
    ],
    {
    name: "milk",
    price: 60,
    count: 60,
    ],
    {
    name: "eggs",
    price: 70,
    count: 70,
    ],
}

```

---

## 386. Фильтрация игроков по наличию команды

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/filtratsiya-igrokov-po-nalichiyu-komandyi-1

### Задача

Есть массив игроков, где каждый игрок представлен объектом с полями:
- name: имя игрока (строка)
- term: команда, в которой он играет (число: 1, 2, 3, 5 или null, если игрок 
не состоит ни в одной команде)
Необходимо написать функцию filterplayers, которая принимает массив игроков 
и возвращает объект с двумя полями:
- withTeam: массив игроков, у которых есть команда (значение term не равно null)
- withoutTeam: массив игроков, у которых нет команды (значение term равно null)

---

## 387. Исправление типов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravlenie-tipov-1

### Задача

При передаче компонента OtherFC в проп Component компонента ContainerFc
ТS должен давать подсказку какие еще пропы мы можем передать в ContainerFc
помимо собственных пропов ContainerFc с правильным указанием типа этих пропов
```javascript
 import { FC } from "react";

type OtherProps = {
    name: string;
    age: number;
};

const OtherFC: FC<OtherProps> = ({ age, name }) => {
    return (    I
    <div>
    {name} (age)
    </div>
    );
};

// Поправить типы в блоке ниже

/** Начало блока в котором можно редактировать и дополнять типы */

type IProps = {
    Component: any;
    height: number;
};

const ContainerFc: FC<IProps> = (props) => {
    const { Component, height } = props;

    return (
    <div style={{ height: '$(height)px' }}>
    <Component (...props) />
</div>
};
};

/** Конец блока в котором можно редактировать типы и дополнить типы */

/** Тут не должно быть ошибок типов */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnyComponent1 = () => {
    return <ContainerFc height=(5) Component={OtherFC} name="Maxc" age=(30) />;

};

/** Тут должны быть ошибки типов */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnyComponent2 = () => {
    return <ContainerFc height=(5) Component={OtherFC} name=(30) age="Maxc" />;

};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnyComponent3 = () => {
    return <ContainerFc height=(5) Component={OtherFC} role="Maxc" />;

};

```

---

## 388. Вывод в консоль №34

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-72

### Задача

Определить что будет выведено в консоль
```javascript
 console.log(1);

setTimeout(() => console.log(2));

setTimeout(() => {
    console.log(3)
    Promise.resolve().then(() => console.log(3.1))
}, 0);

Promise.resolve().then(() => console.log(4));

setTimeout(() => console.log(5));

console.log(6)

```

---

## 389. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-19

### Задача

Найти ошибки в коде
```javascript
 import React, {useEffect, useState} from 'react';
import {fetchTasks} from './tasks-api';

const ToDolist = ({ items }) => {
    return (
    <div>
    <ul>
    {items.length && items.map((item, index) => <li key={index}>{item.text}</li>)} 
    </ul>
    </div>
};
const App = () => {
    const [tasks, setTasks] = useState(null);
    const handleRefreshTasks = (e) =>{
    if (e.key = 'r') {
    const tasks = fetchTasks();
    setTasks(tasks);
    }
};

useEffect(() => {
    document.addEventListener('keydown', handleRefreshTasks);
});

return (
    <div>
    <h2>пример задач: </h2>
    <ToDolist items={[
    { id: 1, text: 'Полить цветы' },
    { id: 2, text: 'Помыть машину' },
    { id: 3, text: 'Выкинуть мусор' },
    ]}/>
    <h2>Сегодня:</h2>
    <ToDolist
    items={tasks}
    />
    <h2>Завтра:</h2>
    <ToDolist items={[]}/>
    </div>
};

export default App;

```

---

## 390. Вывод в консоль №73

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-73

### Задача

Что выведется в консоль
```javascript
Promise.resolve().then(() => console.log(1));

setTimeout(() => console.log(2), 10);

queueMicrotask(() => {
    console.log(3);
    queueMicrotask(() => console.log(4));
});

console.log(5);

```

---

## 391. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-20

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { useState, useEffect, StrictMode } from 'react';
import { createRoot } from "react-dom/client";

const fetchRandomNumber = ( ) =>
Math.random() < 0.5
    ? Promise.resolve(Math.random())
    : Promise.reject(new Error('Oшибка запроса.")
);

const App = () => {
    const [number, setNumber] = useState();
    const [scroll, setScroll] = useState();
    useEffect(async_() => {
    setNumber(await fetchRandomNumber());
    window.addEventListener('scroll', () => setScroll(window.scroll()));
    return () =>
    window.removeEventListener('scroll', () => setScroll(window.scroll()));
    });
    return (
    <div>
    <div> Number: {number} </div>
    <div> Scroll: {scroll} </div>
    </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
    <App />
    </StrictMode>

```

---

## 392. Исправить ошибки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-oshibki-7

### Задача

Сколько items будет выводить этот код, и есть ли тут ошибки 
```javascript
import { useState, useEffect } from 'react';
import { useInfiniteScroll } from './hooks';

const App = () => {
  const [page, setPage] = useState(1);

  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(`https://api.example.com/data?page=${pageNumber}`);
      if (!response.ok) throw new Error('Network error');
      const json = await response.json();
      return json.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const [items, isLoading, error] = useInfiniteScroll(fetchData, page, 10);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
      {isLoading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error.message}</p>}
    </div>
  );
};

export default App;

****
import { useState, useRef, useEffect } from 'react';

const useInfiniteScroll = (fetchMoreItems, items, threshold = 5) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const observer = useRef(null);

  const lastItemElement = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !loading) {
          loadMoreItems();
        }
      });
    }, options);

    if (lastItemElement.current) {
      observer.current.observe(lastItemElement.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [items, loading]);

  const loadMoreItems = async () => {
    setLoading(true);
    try {
      const newItems = await fetchMoreItems(items.length / threshold + 1); // Fetch next page of items
      setItems(prevItems => [...prevItems, ...newItems]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return [items, loading, error];
};

export default useInfiniteScroll;

```

---

## 393. Функция формирования таблицы

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-formirovaniya-tablitsyi-1

### Задача

Дан массив товаров, нужно написать функцию, которая группирует товары в таблицу по типу
```javascript
 const goods = [
    { id: 'ab', name: 'Имя-01', type: 'сталь', weight: 1 },
    { id: 'bc', name: 'Имя-02', type: 'чугун', weight: 2 },
    { id: 'cd', name: 'Имя-03', type: 'сталь', weight: 3 },
    { id: 'de', name: 'Имя-04', type: 'чугун', weight: 4 },
    { id: 'ef', name: 'Имя-05', type: 'чугун', weight: 5 },
    { id: 'fg', name: 'Имя-06', type: 'сталь', weight: '4' },
};

// Задача: получить таблицу по типу + totalweight:
// {
    // 'сталь': { ids: [ 'ab', 'cd', 'fg' ], totalWeight: 8 },
    // 'чугун': { ids: [ 'bc', 'de', 'ef' ], totalWeight: 11 },
    // }

const getRolesTable = arr => {
    console.log(arr);
};

```

---

## 394. Сумма длин интервалов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/summa-dlin-intervalov-1

### Задача

Написать функцию посчета длины интервалов
```javascript
 const intervals = [
    [1, 2],
    [6, 10],
    [7, 9],
    [11, 15]
]

// Ответ - 9

```

---

## 395. Игра на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/igra-na-react-1

### Задача

Реализовать 6 карточек с разными данными, которые должны находиться внизу страницы. По центру должна находиться карточка со скрытыми данными. Нужно угадать, данные какой из 6 карточек находятся в скрытой карточке по центру, кликнув по одной из карточек снизу. При успешном угадывании начисляется 20 очков и игра продолжается, при неудаче - очки сбрасываются до 0

---

## 396. Вывод в консоль №35

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-74

### Задача

Определить что будет выведено в консоль
```javascript
 const myObj = {
    name: 'Maxim',
    greet() {
    console.log(this.name)
    }
};

myObj.greet();

const fn = myObj.greet

```

---

## 397. Функция выполения GET запросов по массиву URL

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyipoleniya-get-zaprosov-po-massivu-url-1

### Задача

Написать асинхронную функцию fetchAll, которая принимает массив url, для каждого из этого url должна выполнить GET запрос и вернуть массив ответов на эти запросы в том же порядке, в котором были заданы url

---

## 398. Управление состоянием формы с универсальным обработчиком

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/upravlenie-sostoyaniem-formyi-s-universalnyim-obrabotchikom-1

### Задача

5 методов в App.tsx, можно менять код по необходимости. Касательно handleChange, нужно сделать реализацию, чтобы одним методом можно было обрабатывать все три поля question, answer, visible

App.tsx
```javascript
import { useState } from "react";
import { initialPAGNetItem, PAGNetItem } from "./constant";
import { PAGNetLineIdle } from "./PAGNetLineIdle";
import "./PAGNetLine.css";

export default function App() {
    const [PAGNetItems, setPAGNetItems] = useState<PAGNetItem[]>(initialPAGNetItem);

    const handleChange = () => {
        // Реализация метода
    };

    const handleWaveBy = () => {
        // Реализация метода
    };

    const handleWordRow = () => {
        // Реализация метода
    };

    const handleDates = () => {
        // Реализация метода
    };

    const handleClickAds = () => {
        // Реализация метода
    };

    return (
        <div className="App">
            <h1>User namespace newpose</h1>
            <div className="list">
                {PAGNetItems.map((item) => (
                    <PAGNetLineIdle
                        key={item.id}
                        item={item}
                        onChange={handleChange}
                        onWaveBy={handleWaveBy}
                        onWordRow={handleWordRow}
                        onDelete={handleDates}
                    />
                ))}
            </div>
            <div className="add_wrapper">
                <button onClick={handleClickAds}>Addware</button>
            </div>
        </div>
    );
}

```


FAQSectionEdit.tsx
```javascript
import { FC } from "react";
import { FAQSection } from "./constants";
import "./styles.css";

type FAQSectionEditProps = {
  section: FAQSection;
  disabledMoveUp: boolean;
  disabledMoveDown: boolean;
  onChange: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
};

export const FAQSectionEdit: FC<FAQSectionEditProps> = ({
  section,
  disabledMoveUp,
  disabledMoveDown,
  onChange,
  onMoveUp,
  onMoveDown,
  onDelete,
}) => {
  return (
    <div className="section-edit">
      <div className="section-edit-move-block">
        <button onClick={onMoveUp} disabled={disabledMoveUp}>
          ^
        </button>
        <button
          onClick={onMoveDown}
          disabled={disabledMoveDown}
          style={{ rotate: "180deg" }}
        >
          ^
        </button>
      </div>
      <div className="section-edit-form">
        <input
          value={section.question}
          onChange={onChange}
          placeholder="Вопрос"
        />
        <textarea
          value={section.answer}
          onChange={onChange}
          placeholder="Ответ"
        />
        <label>
          Сделать видимым
          <input
            type="checkbox"
            checked={section.visible}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="section-edit-delete-block">
        <button onClick={onDelete}>Удалить</button>
      </div>
    </div>
  );
};

```


constants.ts

```javascript
import { v4 as uuid } from "uuid";

export type FAQSection = {
  id: string;
  question: string;
  answer: string;
  visible: boolean;
};

export const initialFAQSections: FAQSection[] = [
  {
    id: uuid(),
    question: "Кто мы?",
    answer: "Люди",
    visible: true,
  },
  {
    id: uuid(),
    question: "Где мы?",
    answer: "Здесь",
    visible: false,
  },
  {
    id: uuid(),
    question: "Почему мы?",
    answer: "Потому",
    visible: true,
  },
  {
    id: uuid(),
    question: "Когда мы?",
    answer: "Тогда",
    visible: true,
  },
];

```

---

## 399. Вывод в консоль №74

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-75

### Задача

Что выведется в консоль
```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

```

---

## 400. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-21

### Задача

Найти и исправить ошибки в коде
```javascript

 import React, { useState, useEffect } from 'react';

// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
    const [number, setNumber] = useState();
    const [scroll, setScroll] = useState();

    useEffect(async () => {
    setNumber(await fetchRandomNumber());
    }
    window.addEventListener('scroll', () => setScroll(window.scrollY));

    return () => window.removeEventListener('scroll', () => setScroll(window.scrollY));
});

return (
    <div>
    <div> Number: { number } </div>
    <div> Scroll: { scroll } </div>
    </div>
)
)

```

---

## 401. Фильтрация элементов на нечётных позициях

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/filtratsiya-elementov-na-nechyotnyih-pozitsiyah-1

### Задача

Вернуть только нечётные позиции, без доп массивов, т.е. с мутированием
```javascript
const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

console.log(evenIndexElements); // ['a', 'c', 'e', 'g']

```

---

## 402. CSS селектор для ссылок

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/css-selektor-dlya-ssyilok-1

### Задача

Есть HTML-структура с различными элементами. Нужно выбрать все ссылки которые:
Находятся внутри элемента с классом .menu.
Являются последними дочерними элементами.
Которые НЕ имеют атрибут target="_blank".
```html
 <div class="menu">
    <a href="home.html">Home</a>
    <a href="contact.html">Contact</a>
    <a href="profile.html" target="_blank">
    Profile
    </a>
</div>

```

---

## 403. Вывод в консоль №36

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-76

### Задача

Определить что будет выведено в консоль
```javascript
 console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7),0);

```

---

## 404. Функция-инвертор типов  string - number

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-invertor-tipov-string-number-1

### Задача

Типизировать функцию, чтобы возвращаемое значение было противоположным входящему
У нас на вход приходит string или number, если приходит string вернуть number,
и наоборот
```javascript
function test = (a) {}

```

---

## 405. Вывод в консоль №37

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-77

### Задача

Определить что будет выведено в консоль
```javascript
 [1, 2, 3].reduce((a, b) => { console.log(a, b); });

```

---

## 406. Функция поиска противоположных чисел в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-poiska-protivopolozhnyih-chisel-v-massive-1

### Задача

Написать функцию findTwo, которая принимает массив чисел и ищет в нем два числа, которые в сумме дают 0
```javascript
 // findTwo([1, 2, 3, -1])    // [0, 3]
// findTwo([1, 2, 3, -1, -2, 0])    // [1, 4] wnw [0, 3]
// findTwo([1, 2, 3, 4])    // null

```

---

## 407. Исправить ошибки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-oshibki-7-2

### Задача

Что будет при выполнение данного кода, если есть ошибки как исправить
```javascript
    useEffect(() => {
        setCount(count + 1);
    }, [count ]

```

---

## 408. Cписок персонажей на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/cpisok-personazhej-na-react-1

### Задача

Создать приложение React, которое загружает список персонажей из API "Rick and Morty";
В приложении добавить поиск и сортировку по имени и статусу, а также пагинацию.
Напротив каждого элемента отобразить всплывающие окно с деталями по элементу
API_LINK = "https://rickandmortyapi.com/api/character";
```javascript

 import "./styles.css";

export default function App() {
    return (
    <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>hello</h2>
    </div>
);

```

---

## 409. Реализация карусели

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-karuseli-1

### Задача

Реализовать карусель и две кнопки "влево" и "вправо". Карусель должна состоять из 10 квадратов, каждый 100x100 пикселей. По клику на одну из кнопок "влево" или "вправо" карусель должна смещаться на 1 квадратик влево или вправо соответственно

---

## 410. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-22

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
    async function fetchUser() {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/$(userId)");
    if (!response.ok) {
    throw new Error('Error fetching user');
    }
    const data = await response.json();
    setUser(data);
    catch (err) {
    setError(true);
    }
}

    fetchUser();
}.[];
}

    useEffect(() => {
    return () => {
    setUser(null); });
}.[]);

    return (
    <div>
    <h1>User Profile</h1>
    {error && <p>Error loading user data.</p>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p> </div>
});

export default UserProfile;

```

---

## 411. Исправить ошибки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-oshibki-7-3

### Задача

Будет ли React  воспринимать useCount, как пользовательский хук?
```javascript
const useCount = (cnt) => cnt + 1;

function MyComponent() {
    const count = useCount(0);

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
}

export default ExampleComponent;

```

---

## 412. Своя реализация filter

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-filter-2-2

### Задача

Написать свою реализацию функции filter

---

## 413. Своя реализация flat

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-flat-1

### Задача

Написать свою реализацию метода flat

---

## 414. Использование reduce

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispolzovanie-reduce-1

### Задача

С помощью метода reduce создать новую копию числового массива, но с умноженными на 2 элементами

---

## 415. Исправить ошибки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-oshibki-7-4

### Задача

Мы должны нажать на кнопку и у нас сразу появится инпут и фокус на нём
Правильно ли написан код, если нет как исправить?
```javascript
import React, { useState, useRef } from 'react';

const ToggleComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const inputRef = useRef(null);

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <>
            <button onClick={toggleVisibility}>Toggle Input</button>
            {isVisible && <input ref={inputRef} />}
        </>
    );
};

export default ToggleComponent;

```

---

## 416. Расположение элементов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/raspolozhenie-elementov-1

### Задача

Нужно расположить элементы в контейнере таким образом, чтобы каждый элемент имел фиксированную ширину 100px, если есть доступное пространство, элементы должны растягиваться, чтобы заполнить всю ширину контейнера, если недостаточно места, элементы должны уменьшать свою ширину, чтобы вместиться в контейнер, если не хватает места для отображения всех элементов в строку, они должны переноситься на следующую строку
```html
 <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

```

---

## 417. Каррированный композитор функций

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/karrirovannyij-kompozitor-funktsij-1

### Задача

Написать функцию compose, которая с помощью каррирования принимает неограниченное количество функций и начальное число. Это число передается в первую функцию, результат этой функции передается в следующую и так далее
```javascript

 const x = (x) => x * 2;
const y = (x) => x * 2;
const z = (x) => x * 2;

// x(y(z(2))) //16
//compose(x, y, z)(2)

```

---

## 418. Исправить ошибки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-oshibki-7-5

### Задача

Исправить ошибки в коде, но нельзя ставить зависимости в useEffect
```javascript
import React, { useState, useEffect } from 'react';

   const Counter = () => {
     const [count, setCount] = useState(0);

     useEffect(() => {
       const timer = setInterval(() => {
         console.log(count);
         setCount(count + 1);
       }, 1000);

       return () => clearInterval(timer);
     }, []);

     return <div>Count: {count}</div>;
   };


export default Counter;

```

---

## 419. Функция вывода диапазона между числами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyivoda-diapazona-mezhdu-chislami-1

### Задача

Написать функцию range, которая принимает два числа и возвращает все числа между ними
```javascript

 for (let num of range(1, 4)) {
    console.log(num);
}

// 1, 2, 3, 4

```

---

## 420. Верстка кнопки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/verstka-knopki-2

### Задача

Сверствать круглую кнопку закрытия с крестиком внутри. Линии крестика должны иметь 3/4 ширины кнопки, относительно width, их толщина 2px, используемые цвета - Рада почему 3/4?. чтобы при увеличении ширины кнопки и ее высоты наши линии крестика имели длину 3/4 от ширины кнопки
```html
 <!DOCTYPE html>
<html>
<head>
    <title>JavaScript Sandbox</title>
    <meta charset="UTF-8" />
</head>

<body>
    <img
    src=""
    alt="" />
    </div>
    <script src="/index.js" type="module"></script>
    </body>
</html>

```

---

## 421. Исправить ошибки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-oshibki-7-6

### Задача

```javascript
import React, { useRef, useState, useEffect } from 'react'

const CountDisplay = (props) =>{
  const [val] = useState(props.c)
  return <div>{val}</div>
}


const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(c => c + 1)
  }
  
  return (<div>
    <button onClick={handleClick}>
      <span>⚛️</span> {count}
    </button>
    <CountDisplay c={count} />
  </div>
  )
}


export default App

```

---

## 422. Список пользователей на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/spisok-polzovatelej-na-react-2

### Задача

Создать простой React-компонент, который делает запрос к бесплатному API(https://jsonplaceholder.typicode.com/users) для получения списка пользователей и отображает их имена на странице. Реализовать функцию поиска по имени пользователя и отобразить результаты в реальном времени, когда пользователь вводит текст в поле поиска.

---

## 423. Верстка кнопки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/verstka-knopki-2-2

### Задача

Сверствать круглую кнопку закрытия с крестиком внутри. Линии крестика должны иметь 3/4 ширины кнопки, относительно width, их толщина 2px, используемые цвета - Рада почему 3/4?. чтобы при увеличении ширины кнопки и ее высоты наши линии крестика имели длину 3/4 от ширины кнопки
```html

 <!DOCTYPE html>
<html>
<head>
    <title>JavaScript Sandbox</title>
    <meta charset="UTF-8" />
</head>

<body>
    <img
    src=""
    alt="" />
    </div>
    <script src="/index.js" type="module"></script>
    </body>
</html>

```

---

## 424. Функция удаления дубликатов в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-udaleniya-dublikatov-v-massive-2-2

### Задача

Написать функцию, которая принимает массив и возвращает массив уникальных значений

---

## 425. Список пользователей на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/spisok-polzovatelej-na-react-2-2

### Задача

Создать простой React-компонент, который делает запрос к бесплатному API(https://jsonplaceholder.typicode.com/users) для получения списка пользователей и отображает их имена на странице. Реализовать функцию поиска по имени пользователя и отобразить результаты в реальном времени, когда пользователь вводит текст в поле поиска.

---

## 426. Расположение элемента по центру окна браузера

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/raspolozhenie-elementa-po-tsentru-okna-brauzera-2-2

### Задача

Расположить квадрат по центру окна браузера
```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie-edge" />
    <title>HTML + CSS</title>
    <link rel="stylesheet" href="styles.css" />
    </head>
<body>
    <div class="hi">Hil</div>
    </body>
</html>

```

---

## 427. Вычисление площади ограничивающего прямоугольника

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyichislenie-ploschadi-ogranichivayuschego-pryamougolnika-1

### Задача

Для заданного набора двумерных точек, вычислить площадь ограничивающего прямоугольника
```javascript
type Points = Array<[number, number]>;

const getBoundingBoxArea = (points: Points): number => {
};

const points1: Points = [
    [1, 1],
    [2, 3],
    [5, 5],
];

const points2: Points = [
    [-10, -10],
    [23, 13],
    [22, 33],
    [2, 3],
    [50, 50],
];

console.log(getBoundingBoxArea(points1)); // 16
console.log(getBoundingBoxArea(points2)); // 3600

```

---

## 428. Компонент загрузки данных пользователя

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/komponent-zagruzki-dannyih-polzovatelya-1

### Задача

Компонент который будет получать пользователя по {{userId}} и выводить его
 Для запроса использовать fetchUser
```javascript
type Props = {
  userId: number | null;
}
 
export const User: FC<Props> = ({ userId }) => {
  // Write your solution here
  const user = userId && fetchUser({ id: userId });
  if (!user) return null;

  return (
    <div className="stack column">
      <div>UserId: </div>
      <div>UserName: </div>
    </div>
  );
};

const Loader = () => <p data-testid="loader">Loading...</p>

const Error = ({ e } : {e: AxiosError}) => {
  <p style={{ color: "red" }} data-testid="error">
    {e.message}
  </p>
}

```

---

## 429. Функция поиска пары с суммой цифр 8

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-poiska-paryi-s-summoj-tsifr-8-1

### Задача

Функция, которая принимает массив чисел и выдаст индекс
первого вхождение рядом стоящих элементов, сумма цифр которых равна 8.
Постараться реализовать, с минимальной сложностью алгоритма 
```javascript
const arr = [1, 5, 4, 3, 2, 6]

```

---

## 430. Игра Crush the mole(Ударь крота) на typescript.

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/igra-crush-the-moleudar-krota-na-typescript-1

### Задача

На поле 4 на 4 клетки через случайные промежутки времени,
в случайной клетке появляется крот, которого нужно прихлопнуть молотком (левая кнопка мыши).

Крот отображается на клетке, пока пользователь не кликнет по нему.
После клика крот исчезает и снова появляется в случайной клетке поля.
Игру можно остановить и начать по кнопке (можно обойтись одной).
Крота можно показать любым удобным вам символом (например @ или любой другой). 
Для генерации числа можно воспользоваться Math.random(), возвращающим случайное число от 0 до 1.
```javascript
import React, { useState, useEffect } from "react";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>⭐️ Crush the mole ⭐️</h1>
    </div>
  );
};

export default App;

```

---

## 431. Ограниченное параллельное выполнение запросов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ogranichennoe-parallelnoe-vyipolnenie-zaprosov-1

### Задача

Реализуйте функцию, которая выполняет callback для каждого элемента данных и возвращает массив ответов Response[].
Запросы должны выполняться параллельно, но с ограничением на количество одновременно выполняемых запросов (limit).
Основная задача — сократить общее время выполнения.
```javascript
type Props<RequestData, Response> = {
    callback: (args: RequestData) => Promise<Response>;
    data: Array<RequestData>;
    limit: number;
};

/*                    Решение задачи                */
export async function runWithLimit<RequestData, Response>({
    callback,
    data,
    limit,
}: Props<RequestData, Response>): Promise<Response[]> {
    /*    START SOLUTION HERE  */
    const result: Response[] = [];

    return Promise.all([]);
}

```

---

## 432. Очистка дерева объектов от ненужных узлов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ochistka-dereva-obektov-ot-nenuzhnyih-uzlov-1

### Задача

Задача состоит в удалении из дерева объектов всех узлов,
у которых свойство Alive равно false. Однако если у узла
свойство Alive равно true, все его родители и потомки
должны остаться в дереве.

Дополнительно:
Выполните задачу с использованием рекурсивного и итеративного алгоритмов,
объясните, в каких случаях следует использовать каждый из них,
а также преимущества и недостатки каждого подхода.
```javascript
export class BaseNode {
    constructor(
        public id: number,
        public alive: boolean,
        public children: BaseNode[],
        public parent?: BaseNode
    ) { }
}

/* SOLUTION */
class NodeItem extends BaseNode {
    constructor(
        public id: number,
        public alive: boolean,
        public children: NodeItem[],
        public parent?: NodeItem
    ) {
        super(id, alive, children, parent);
    }
}

export function nodeCleaner(rootNode: NodeItem) {
    /* START SOLUTION */
}

```

---

## 433. Функция отложенного вызова с ограничением частоты

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-otlozhennogo-vyizova-s-ogranicheniem-chastotyi-1

### Задача

Функция debounce для ограничения частоты вызова функции

---

## 434. Группировка массива объектов по ключу type

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/gruppirovka-massiva-obektov-po-klyuchu-type-1

### Задача

1. Вернуть объект с ключами type из масива,
значение - массив элементов с таким type
2. Вернуть объект с ключами type, а значение - объект
вида {count: количество, weight: суммарный вес}
```javascript
const arr = [
  { type: "banana", weight: 32 },
  { type: "apple", weight: 24 },
  { type: "kiwi", weight: 55 },
  { type: "banana", weight: 44 },
  { type: "orange", weight: 5 }
];

```

---

## 435. Функция суммирования с поддержкой частичного применения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-summirovaniya-s-podderzhkoj-chastichnogo-primeneniya-1

### Задача

```javascript
const sum = () => {};

// console.log(sum()); // Вернет 0
// console.log(sum(1)()); // Вернет 1
// console.log(sum(2)(3)()); // Вернет 5
// console.log(sum(10)(7)(41)()); // Вернет 58

```

---

## 436. Расширение числового типа для цепочки арифметических операций

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/rasshirenie-chislovogo-tipa-dlya-tsepochki-arifmeticheskih-operatsij-1

### Задача

Методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4
```javascript
// console.log((2).plus(3).minus(1));

```

---

## 437. Вывод в консоль №75

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-78

### Задача

Что код выведет в консоли
```javascript
setTimeout(function timeout() {
  console.log("Шаг 1");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Шаг 2");
  resolve();
});

p.then(function () {
  console.log("Шаг 3");
});

console.log("Шаг 4");

```

---

## 438. Ререндер компонента

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/rerender-komponenta-1

### Задача

Будет ли ререндериться компонент OtherFc
```javascript
import { useEffect, useState, FC, PropsWithChildren } from "react";

const OtherFc = () => {
  // console.log("render");

  return <div>2</div>;
};

const MainFc: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(0);
  console.log("state", state);

  useEffect(() => {
    setInterval(() => {
      setState((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div>{children}</div>;
};

export const App = () => (
  <MainFc>
    <OtherFc />
  </MainFc>
);

```

---

## 439. Исправить ошибки, оптимизировать

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-oshibki-optimizirovat-1

### Задача

```javascript
import { useEffect, useState, FC } from "react";

const data = {
  name: "54",
  age: 21,
  info: 22
};

const MainFc: FC<typeof data> = ({ name, ...rest }) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setState((prev) => prev + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    // .... какие-то сложные вычисления
  }, [rest]);

  return <div>{state}</div>;
};

export const App = () => <MainFc {...data} />;

```

---

## 440. Типизировать

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizirovat-2

### Задача

Записать правильный тип для MYType, чтоб переменные,
которым это тип будет присвоем имели тип состоящий из ключей объекта obj
```javascript
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const obj = {
  name: "Nik",
  age: 25
};

type MYType = any; // Вместо any нужный тип

//---------

/** Тут не должно быть ошибок типов */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const var1: MYType = "name";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const var2: MYType = "age";

//----------

/** Тут должны быть ошибки типов */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const var3: MYType = "test";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const var4: MYType = 25;

```

---

## 441. Типизировать компонент

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizirovat-komponent-1

### Задача

При передаче компонента OtherFC в проп Component компонента ContainerFc
TS должен давать подсказку какие еще пропы мы можем передать в ContainerFc
помимо собственных пропов ContainerFc с правильным указанием типа этих пропов
```javascript
import { FC } from "react";

type OtherProps = {
  name: string;
  age: number;
};

const OtherFC: FC<OtherProps> = ({ age, name }) => {
  return (
    <div>
      {name} {age}
    </div>
  );
};

/** Начало блока в котором можно редактировать и дополнять типы */
type IProps = {
  Component: any;
  height: number;
};

const ContainerFc: FC<IProps> = (props) => {
  const { Component, height } = props;

  return (
    <div style={{ height: `${height}px` }}>
      <Component {...props} />
    </div>
  );
};
/** Конец блока в котором можно редактировать типы и дополнять типы */

/** Тут не должно быть ошибок типов */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnyComponent1 = () => {
  return <ContainerFc height={5} Component={OtherFC} name="Макс" age={30} />;
};

/** Тут должны быть ошибки типов */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnyComponent2 = () => {
  return <ContainerFc height={5} Component={OtherFC} name={30} age="Макс" />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnyComponent3 = () => {
  return <ContainerFc height={5} Component={OtherFC} role="Макс" />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnyComponent4 = () => {
  return <ContainerFc height={5} Component={OtherFC} name="Макс" />;
};

```

---

## 442. Сумма значений всех узлов дерева

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/summa-znachenij-vseh-uzlov-dereva-1

### Задача

```javascript
interface ITree {
  value: number;
  left?: ITree;
  right?: ITree;
}

const tree: ITree = {
  left: {
    left: {
      left: {
        right: {
          left: {
            value: 7,
          },
          right: {
            value: 14,
          },
          value: 66,
        },
        value: 23,
      },
      value: 90,
    },
    right: {
      value: 67,
    },
    value: 34,
  },
  right: {
    value: 11,
  },
  value: 16,
};

function treeValueSum(tree: ITree) {
  let sum = tree.value;

  if (tree.left) {
    sum += treeValueSum(tree.left);
  }

  if (tree.right) {
    sum += treeValueSum(tree.right);
  }

  return sum;
}

console.log(treeValueSum(tree));
console.log(treeValueSum(tree) === 328);

```

---

## 443. Оптимизация перерисовки компонентов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/optimizatsiya-pererisovki-komponentov-1

### Задача

```javascript
import React from "react";
import { useState } from "react";

export const App = () => {
  const [someNumber] = useState(9);
  const [text, setText] = useState("");

  const heavyCalculation = () => {
    console.log("heavyCalculation");
    return someNumber + Date.now();
  };

  const onSend = () => {
    console.log("send text = ", text);
  };

  return (
    <div>
      <TextField text={text} setText={setText} />
      <HeavySendButton onClick={onSend} />

      <pre>{heavyCalculation()}</pre>

      <button onClick={onSend}>Кнопка отправки 2</button>
    </div>
  );
};

const HeavySendButton = ({ onClick }) => {
  console.log("SendButton render");
  return <button onClick={onClick}>Кнопка отправки 1</button>;
};

const TextField = ({ text, setText }) => {
  return (
    <input value={text} onChange={(event) => setText(event.target.value)} />
  );
};

```

---

## 444. Цепочные вызовы методов для манипуляции DOM-элементами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tsepochnyie-vyizovyi-metodov-dlya-manipulyatsii-dom-elementami-1

### Задача

Функцию $, которая позволит последовательно вызывать
функции addClass для добавления класса,
html для вставки html внутрь выбранного элемента
toggleClass для переключения класса
css для добавления css свойств
```javascript
import "./helpers";

function $(selector) {
  //code here
}

// пример использования
// const $node = $(".js-node");

// $node.addClass("bordered").html("<li>hello</li>").toggleClass("disabled").css({
//   color: "green",
//   padding: "10px"
// });

```

---

## 445. Интерфейс симуляция серии HTTP-запросов с настройками пользователя

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/interfejs-simulyatsiya-serii-http-zaprosov-s-nastrojkami-polzovatelya-1

### Задача

```javascript
import React from "react";

export function App() {
  const [numOfRequests] = React.useState(10);
  const [url] = React.useState("codesandbox.io");

  return (
    <div>
      <div>
        <label>URL</label>
        <input value={url} />
      </div>
      <div>
        <label>Number of requests</label>
        <input value={numOfRequests} />
      </div>
      <div>
        <label>Avg response time</label>
        <input />
      </div>
      <div>
        <label>Requests made</label>
        <input />
      </div>
      <button>Start</button>
    </div>
  );
}

```

---

## 446. Определение цвета блока

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/opredelenie-tsveta-bloka-2

### Задача

Определить какого цвета будет текст в элементе div и почему
```html
 <html>
<head>
    <style>
    #element {
    color: 0red;
    }
    .element {
    color: 0blue;
    }
    div.element {
    color: 0yellow;
    }
    div.element {
    color: 0magenta;
    }
    </style>
</head>
<body>
    <div id="element" class="element">
    Some dummy text
    </div>
</body>
</html>

```

---

## 447. Определение цвета блока

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/opredelenie-tsveta-bloka-2-2

### Задача

Определить какого цвета будет текст в элементе span
```html
 <head>
    <title>CSS test 2</title>
</head>
<body style="color: 0red; font-weight: bold; display: block; background: url('bg.jpg');">
    </div>
    Some test text
    </div>
    Lorem ipsum etc..
    <span>
    One more dummy text
    </span>
    </div>
    </div>
</body>
</html>

```

---

## 448. Анализ кода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/analiz-koda-8

### Задача

Объяснить что делает этот код
```html
 <html>
<head>
    <style>
    :root {
    --target-y: 100wh
    }

    @media(max-height:500px) {
    :root {
    --target-y: 400px
    }
    }

    @keyframes fromTarget {
    0% { transform: translate3d(0,var(--target-y),0); }
    100% { transform: translate3d(0,0,0); }
    }

    #target {
    animation: fromTarget ls ease-in;
    }
    </style>
</head>
<body>
    <div id="target"></div>
</body>
</html>

```

---

## 449. Вывод в консоль №76

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-79

### Задача

Определить что будет выведено в консоль
```javascript
 function a () {
    console.log(this);
}

function b () {
    a();
}

const c = {
    a,
    b,
}

c.a();
c.b();

```

---

## 450. Вывод в консоль №77

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-80

### Задача

Определить что будет выведено в консоль
```javascript
 const a = {} => {
    console.log(this);
};
const c = {
    a;
    b: {}
    console.log(this);
    },
};
c.a();
c.b();

```

---

## 451. Отрисовка элемента

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/otrisovka-elementa-1

### Задача

Определить что будет выведено на экран
```html
 <html>
<head>
    <title>JS test 1</title>
</head>
<body>
    <div id="container">
    0
    </div>
    <<script>
    document.addEventListener('DOMContentLoaded', () => {
    const hostEl = document.getElementById('container');
    let counter = 0;

    while(true) {
    hostEl.innerText = counter++;
    }
    }
    </script>
</body>
</html>

```

---

## 452. Анализ кода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/analiz-koda-8-2

### Задача

Определить какие элементы DOM дерева изменятся при нажатии на кнопку
```javascript
 function SimpleButton(props) {
    const [txt,* setTxt] = useState(props.text || 'a')
    const changeText = () => {
    setTxt(txt + txt)
    }

    return (
    <button onClick={changeText}> 
    {txt} 
    </button>
});

```

---

## 453. Вывод в консоль №78

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-81

### Задача

Определить что будет выведено в консоль
```javascript
 var a = {    firstName: 'Bill',    lastName: 'Ivanov',    sayName: function() {    console.log(this.firstName);    }},    sayLastName: () => {    console.log(this.lastName);    } };

a.sayName(); //

var b = a.sayName;

b(); //

a.sayName.bind({ firstName: 'Boris' })(); //

a.sayName(); //
a.sayLastName(); //

a.sayName.bind({ firstName: 'Boris' }).bind({ firstName: 'Tom' })(); //
a.sayLastName.bind({ lastName: 'Petrov' })();

```

---

## 454. Вывод в консоль №79

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-82

### Задача

Определить что будет выведено в консоль
```javascript
 console.log('start'); // 
setTimeout(() -> console.log('timeout'), 0); // 
new Promise((resolve, reject) => { 
    console.log('promise constructor'); // 
    reject(); 
}).then(() -> console.log('promise')) // 
.catch(() -> console.log('promise1')) // 
.catch(() -> console.log('promise2')) // 
.then(() => console.log('promise3')) // 
.then(() -> console.log('promise4')); // 
console.log('final'); //

```

---

## 455. Анализ кода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/analiz-koda-8-3

### Задача

Определить что произойдет при клике на кнопку
```javascript
 export default function CounterApp()
    let count = 0;

const changeCount = () => {
    count += 1;
    }
return (
    <div className="App">
    <p>'Чтo произойдет при клике по кнопке</p>
    <hi>Count = {count}</hi>
    <button onClick={changeCount}-'кнопка</button>
    </div>
});

```

---

## 456. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-23

### Задача

Найти и исправить ошибки в коде
```javascript
 export default function CounterApp()
    let count = 0;

const changeCount = () => {
    count += 1;
    }
return (
    <div className="App">
    <p>'No произойдет при клике по кнопке</p>
    <hi>Count = {count}</hi>
    <button onClick={changeCount}-'кнопка</button>
    </div>
});

```

---

## 457. Вывод данных из input

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-dannyih-iz-input-1

### Задача

Вывести данные введенные в инпут, учитывая, что один input управляемый, а второй нет
```javascript
 export default function App() {
    return {
    <div className="App">
    </form>
    <input placeholder="compiled" />
    <input placeholder="uncompiled" />
    <button>Submit</button>
    </form>
    </div>
};

```

---

## 458. Создание кастомного хука useFirstRender

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-kastomnogo-huka-usefirstrender-1

### Задача

Написать реализацию хука useFirstRender. Он должен вызываться после первой отрисовки компонента
```javascript

 import RenderAfterFirstRender from "./book";

export default function App() {
    return (
    <div className="App">
    <p>реализовать хук userfirstRender</p>
    <RenderAfterFirstRender>
       контент после первого рендера
    </RenderAfterFirstRender>
    </div>
);
}

```

---

## 459. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-24

### Задача

Найти и исправить ошибки в коде
```javascript
 import React from 'react';

const PleaseRevIewMe = () -> {
    const [count, setCount] = React.useState(1);
    const [items, setItems] = React.useState([{ id: 1 }]);

    React.useLayoutEffect(() -> {
    document.addEventListener('click', () => {
    setInterval(() => console.log(count), 1000);
    });
    }

    const click = React.useCallback(() => {
    setCountCount + 1);
    setItems([...items, { id: count + 1 }]);
    });

    return (
    <React.Fragment>
    Current count: {count}
    <ul>
    {items.map((item) => {
    <li>{{item.id}</li>
    });
    </ul>
    <button onClick={() => click()}>add one</button>
    </React.Fragment>
});

export default PleaseRevIewMe;

```

---

## 460. Вывод в консоль №80

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-83

### Задача

Определить что будет выведено в консоль
```javascript
 console.log(a);
setTimeout(() => console.log
(2), 0);
console.log(3); [

```

---

## 461. Функция создания дерева

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-sozdaniya-dereva-1

### Задача

Написать функцию, которая принимает массив объектов, состоящих из двух полей: название и родитель, и превращает массив в дерево
```javascript
 const categories = {

    "title": "Приготовление напитков",
    "parent": "Техника для кухни"
};

    "title": "Техника для дома",
    "parent": "Бытовая техника"
};

    "title": "Веренные панели",
    "parent": "Встраиваемся техника"
};

    "title": "Бытовая техника",
    "parent": null
};

    "title": "Встраиваемся техника",
    "parent": "Бытовая техника"
};

    "title": "Духовые входы",
    "parent": "Встраиваемся техника"
};

    "title": "Продукты питания",
    "parent": null
};

    "title": "Электронаймики и термопоты",
    "parent": "Техника для кухни"
};

    "title": "Вытяжки",
    "parent": "Встраиваемся техника"
};

    "title": "Техника для кухни",
    "parent": "Бытовая техника"
}

```

---

## 462. Найти ошибки в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibki-v-kode-26-25

### Задача

Найти и исправить ошибки в коде
```javascript
 import { useState, useState, useState } from "reset";
import "./App.css";

export default function App() {
    const [started, setStarted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const intervalId = userId();

    const stopHandler = () => {
    setCurrentTime(0);
    setStarted(false);
    clearInterval(intervalId.current);
    intervalId.current = null;
};

const startHandler = () => {
    if (started) {
    clearInterval(intervalId.current);
    intervalId.current = null;
    } else {
    intervalId.current = setInterval(() => {
    setCurrentTime((prev) => prev + 1);
    }, 1000);
    }
    setStarted(started);
};

usedFfect(() => {
    if (currentTime % 5 == 0 && currentTime != 0) {
    document.querySelector('.timer').classList.add("pulsate")
    }
    });
}

return (
    <main className="main">
    <div>
    <button onClick=<startHandler>-[started ?
    "Pause" + "Start">-/button>
    <button onClick=[stopHandler]>Stop>/button>
    <div className="time="">> : {currentTime}</div>
    </main>

```

---

## 463. Вывод в консоль №81

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-84

### Задача

Определить что будет выведено в консоль
```javascript
 console.log( typeof [] )

```

---

## 464. Вывод в консоль №82

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-32

### Задача

Определить что будет выведено в консоль
```javascript
 console.log( typeof null )

```

---

## 465. Вывод в консоль №83

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-85

### Задача

Определить что будет выведено в консоль
```javascript
 const first = () => console.log('Ojmm') const second = () => console.log('Hoa') const third = () => console.log('Tpm')

first() setTimeout(second, 0) third()

```

---

## 466. Вывод в консоль №84

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-86

### Задача

Определить что будет выведено в консоль
```javascript
 var a = 2
var b = a
b++ 
console.log(a) // ?? 
console.log(b) // ??

```

---

## 467. Вывод в консоль №85

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-87

### Задача

Определить что будет выведено в консоль
```javascript
 var c = [1, 2, 3]
var d = c
d.push(d)
console.log(c) // ?
console.log(d)

```

---

## 468. Вывод в консоль №86

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-88

### Задача

Определить что будет выведено в консоль
```javascript
 {
    console.log(i) // ??
    var i = 10
    console.log(i) // ??
}

{
    console.log(i) // ??
    const i = 10
    console.log(i) // ??
}

```

---

## 469. Вывод в консоль №87

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-89

### Задача

Определить что будет выведено в консоль
```javascript
 Promise.resolve(1)
.them(x => x + 1)    I
.them(x => { throw x })
.them(x => console.log(x))
.catch(err => console.log(err))
.them(x => Promise.resolve(x))
.catch(err => console.log(err))
.them(x => console.log(x))

```

---

## 470. Функция обертка, возвращающая Promise

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-obertka-vozvraschayuschaya-promise-1

### Задача

Есть функция asyncAuth, которая принимает callback, в который могут быть переданы ошибка и данные с сервера, и выполняет его после завершения работы. Нужно написать функцию обертку auth, которая будет возвращать Promise
```javascript
 import asyncAuth from '~';

/**
  функция `asyncAuth(callback)` принимает callback, в который может
  быть передана ошибка (перемк аргументом) и данные
  с буксида (вторая аргументом).
  asyncAuth(error, data) => {});
  *
  Вам нужно реализовать функцию `auth()`, 
  которая вызывает `asyncAuth()`, но возвращает Promise.
  *
  @returns (Promise)
  */
function auth() {
    asyncAuth((error, data) => {});
}

/**
  функция `tryAuth()` использует `auth()` и, в случае ошибки,
  совершает N дополнительные попытки.
  в случае, если все попытки провалились - вернуть последнюю ошибку
  *
  @returns (Promise)
  */
function tryAuth(n) {
}

```

---

## 471. Функция сортировки нечетных чисел

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-sortirovki-nechetnyih-chisel-1

### Задача

Есть функция asyncAuth, которая принимает callback, в который могут быть переданы ошибка и данные с сервера, и выполняет его после завершения работы. Нужно написать функцию обертку auth, которая будет возвращать Promise
```javascript
 import asyncAuth from '~';

/**
  функция `asyncAuth(callback)` принимает callback, в который может
  быть передана ошибка (перемк аргументом) и данные
  с буксида (вторая аргументом).
  asyncAuth(error, data) => {});
  *
  Вам нужно реализовать функцию `auth()`, 
  которая вызывает `asyncAuth()`, но возвращает Promise.
  *
  @returns (Promise)
  */
function auth() {
    asyncAuth((error, data) => {});
}

/**
  функция `tryAuth()` использует `auth()` и, в случае ошибки,
  совершает N дополнительные попытки.
  в случае, если все попытки провалились - вернуть последнюю ошибку
  *
  @returns (Promise)
  */
function tryAuth(n) {
}

```

---

## 472. Своя реализация метода map

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/svoya-realizatsiya-metoda-map-1

### Задача

Написать свою реализацию метода map

---

## 473. Сортировка массива объектов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-massiva-obektov-1

### Задача

Отсортировать массив объектов по дате
```javascript
 let arr = [
    { date: "10.01.2017" },
    { date: "01.12.2002" },
    { date: "11.02.2021" },
    { date: "05.11.2016" }
];

```

---

## 474. Функция счетчик через замыкание

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-schetchik-cherez-zamyikanie-1

### Задача

Написать функцию счетчик с помощью замыкания

---

## 475. Вывод в консоль №88

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-96-90

### Задача

Определить что будет выведено в консоль
```javascript
 // console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

```

---

## 476. Каррированная функция сложения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/karrirovannaya-funktsiya-slozheniya-3-2

### Задача

Написать функцию сложения, которая может принимать параметры как в нормальном виде, так и с помощью каррирования

---

## 477. Анализ кода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/analiz-koda-8-4

### Задача

Объяснить, что происходит в коде
```javascript
 import { userfract } from "react";
import { useDispatch, useSelector } from "react-ready";

import { getExpandedSomItemFilter, getSonDbFilterRows, getSonDbSelectedColumns } from "slices/sonDb/sonDbSelectors";
import { sonDbActions } from "slices/sonDb/sonDbSlice";

import { SonDbAccordion } from "../SonDbAccordion/SonDbAccordion";
import { SonDbFilterItem } from "./SonDbFilterItem";

export const SonDbFilter = () => {
    const dispatch = useDispatch();
    const selectedColumns = useSelector(getSonDbSelectedColumns);
    const filterRows = useSelector(getSonDbFilterRows); [ ]
    const expandedSomItemFilter = useSelector(getExpandedSomItemFilter);

    useEffect(() => {
    dispatch(sonDbActions.setFilterRows(selectedColumns));
}, [dispatch, selectedColumns]);

return (
    <div>
    <SonDbAccordion
    title="Параметры фильтра"
    showChildren=(filterRows?.length > 0)
    expanded=(expandedSomItemFilter)
    setExpanded={(newValue) => dispatch(sonDbActions.setExpandedSomItemFilter(newValue)))
    (filterRows?.map(({ id, childId, name, charType }) => {
    return <SonDbFilterItem id={id} childId={childId} title={name} charType={charType}/>;
    });
    </SonDbAccordion>
</div>
});

```

---

## 478. Анализ кода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/analiz-koda-8-5

### Задача

Объяснить, что происходит в коде
```javascript
 import { copyObj } from "core/iterable_utils";

export const useSomDbFilterTableData = (tableData) => {
    const filterTableData = (searchValue) => {
        const newTableData = copyObj(tableData).map((row) => {
            const filterRow = (row) => {
                row.visible = true;
                if (row.model_name === "SonItem") {
                    if (
                        !String(row.code).toLowerCase().includes(searchValue.toLowerCase()) &&
                        !String(row.name).toLowerCase().includes(searchValue.toLowerCase())
                    ) {
                        row.visible = false;
                    }
                } else if ("_children" in row) {
                    const children = row._children;
                    children.forEach((childRow) => {
                        filterRow(childRow);
                    });
                    if (!children.some((childRow) => childRow.visible)) {
                        row.visible = false;
                    }
                }
            };
            filterRow(row);
            return row;
        });

        return newTableData;
    };
};

```

---

## 479. Перемещение объектов из одного списка в другой

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/peremeschenie-obektov-iz-odnogo-spiska-v-drugoj-1

### Задача

Необходимо доработать веб-страницу, чтобы при нажатии на кнопку "покупать" случайная машина из автосалона перемещалась в гараж
```javascript
import "./styles.css";
import { List } from "./list";

const listData = [{ label: "Mercedes" }];

const cars = [
  "Audi",
  "Toyota",
  "Lexus",
  "Volkswagen",
  "Porsche",
  "Nissan",
  "Hyundai",
  "KIA",
  "Chevrolet",
  "Ford",
  "Renault",
  "Mazda",
  "Suzuki",
];

export default function App() {
  return (
    <div className="App">
      <span>По кнопке "покупать" случайную машину и помещать ее в гараж</span>
      <div>Автосалон: {cars.join(", ")}</div>
      <button>Купить машину</button>
      <List items={listData} />
    </div>
  );
}

```

---

## 480. Преобразование числа в строку

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/preobrazovanie-chisla-v-stroku-1

### Задача

Дано произвольное число. Требуется преобразовать его в строку. Необходимо описать, какой результат будет получен в результате такого преобразования, а также указать подходящий тип преобразования и метод, который может быть использован для его реализации

---

## 481. Преобразование массива в объект с ключами-идентификаторами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/preobrazovanie-massiva-v-obekt-s-klyuchami-identifikatorami-1

### Задача

Дан массив объектов, представляющих пользователей. Требуется выполнить нормализацию этого массива — преобразовать его в объект, в котором ключами будут идентификаторы пользователей (id), а значениями — соответствующие объекты с данными о пользователях
```javascript
const users = [
  { id: 1, age: 16, salary: 200, name: 'Andrey', roles: ['front'] },
  { id: 2, age: 21, salary: 250, name: 'Vasya', roles: ['back'] },
  { id: 3, age: 30, salary: 400, name: 'Sergey', roles: ['front', 'lead'] },
  { id: 4, age: 25, salary: 360, name: 'Dmitriy', roles: ['manager'] },
  { id: 5, age: 50, salary: 420, name: 'Max', roles: ['back', 'lead'] },
];

```

---

## 482. Функция поиска пользователя с максимальной зарплатой среди лиц младше заданного возраста

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-poiska-polzovatelya-s-maksimalnoj-zarplatoj-sredi-lits-mladshe-zadannogo-vozrasta-1

### Задача

Необходимо реализовать функцию, которая возвращает имя пользователя с максимальной зарплатой среди тех, чей возраст меньше заданного значения, передаваемого в качестве параметра
```javascript
const users = [
  { id: 1, age: 16, salary: 200, name: 'Andrey', roles: ['front'] },
  { id: 2, age: 21, salary: 250, name: 'Vasya', roles: ['back'] },
  { id: 3, age: 30, salary: 400, name: 'Sergey', roles: ['front', 'lead'] },
  { id: 4, age: 25, salary: 360, name: 'Dmitriy', roles: ['manager'] },
  { id: 5, age: 50, salary: 420, name: 'Max', roles: ['back', 'lead'] },
];

```

---

## 483. Создание React-компонента для текста

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-react-komponenta-dlya-teksta-2

### Задача

Необходимо создать отдельный компонент React для текста "Hello CodeSandbox"
```javascript
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

```

---

## 484. Создание React-компонента для текста с использованием пропса

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-react-komponenta-dlya-teksta-s-ispolzovaniem-propsa-1

### Задача

Необходимо создать отдельный компонент React для текста "Hello CodeSandbox". Вместо фиксированного значения "CodeSandbox" в компонент должно передаваться динамическое значение через пропсы
```javascript
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

```

---

## 485. Функция преобразования массива цифр в номер телефона

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-preobrazovaniya-massiva-tsifr-v-nomer-telefona-1

### Задача

Необходимо написать функцию, которая принимает массив из 10 целых чисел (в диапазоне от 0 до 9) и возвращает строку с этими числами в виде телефонного номера.
Пример:
```javascript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => возвращает "(123) 456-7890"

```


Формат результирующей строки должен строго соответствовать указанному — включая скобки, пробел после закрывающей скобки и дефис между группами цифр

---

## 486. Вычисление цифрового корня числа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyichislenie-tsifrovogo-kornya-chisla-1

### Задача

Цифровой корень — это рекурсивная сумма всех цифр числа. Дано число n. Необходимо складывать все его цифры. Если результат больше одной цифры — продолжаем складывать цифры результата, пока не получится однозначное число. На вход подаётся неотрицательное целое число.
Примеры:
16     --> 1 + 6 = 7
942    --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2

---

## 487. Изменение имени при нажатии на кнопку в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/izmenenie-imeni-pri-nazhatii-na-knopku-v-react-2

### Задача

В существующем React-компоненте App необходимо добавить кнопку и состояние (useState), представляющее объект с полем name, начальное значение которого — "Антон". При нажатии на кнопку значение поля name должно измениться на "Александр"
```javascript
import { useCallback, useEffect, useMemo, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const btnClick = () => {
    setCount(count + 1);
  };

  const handleBtnClick = useCallback(() => {
    btnClick();
  }, []);

  // function btnClick2() {
  //   const bigArr = Array(1000000).fill("user");
  //   bigArr.forEach((el, i, arr) => {
  //     arr[i] = arr[i] + i;
  //   });
  //   setCount(count + 1);
  // }

  return (
    <div>
      <button onClick={handleBtnClick}>{count}</button>
      {/* <button onClick={btnClick2}>Compute Heavy</button> */}
      <div />
      <input type="text" />
    </div>
  );
}

```

---

## 488. Изменение имени при нажатии на кнопку в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/izmenenie-imeni-pri-nazhatii-na-knopku-v-react-2-2

### Задача

В существующем React-компоненте App необходимо добавить кнопку и состояние (useState), представляющее объект с полем name, начальное значение которого — "Антон". При нажатии на кнопку значение поля name должно измениться на "Александр"
```javascript
import { useCallback, useEffect, useMemo, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const btnClick = () => {
    setCount(count + 1);
  };

  const handleBtnClick = useCallback(() => {
    btnClick();
  }, []);

  // function btnClick2() {
  //   const bigArr = Array(1000000).fill("user");
  //   bigArr.forEach((el, i, arr) => {
  //     arr[i] = arr[i] + i;
  //   });
  //   setCount(count + 1);
  // }

  return (
    <div>
      <button onClick={handleBtnClick}>{count}</button>
      {/* <button onClick={btnClick2}>Compute Heavy</button> */}
      <div />
      <input type="text" />
    </div>
  );
}

```

---

## 489. Перерисовка при нажатии на кнопку в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/pererisovka-pri-nazhatii-na-knopku-v-react-3

### Задача

Определить, будет ли выполнена перерисовка при нажатии на вторую кнопку 
```javascript
import { useCallback, useEffect, useMemo, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState({
    name: 'Anton',
  });

  const handleBtnClick2 = () => {
    count2.name = 'Alex';
  };

  const btnClick = () => {
    setCount(count + 1);
  };

  const handleBtnClick = useCallback(() => {
    btnClick();
  }, []);

  return (
    <div>
      <button onClick={handleBtnClick}>{count}</button>
      <button onClick={handleBtnClick2}>{count2.name}</button>
      {/* <button onClick={btnClick2}>Compute Heavy</button> */}
      <div />
      <input type="text" />
    </div>
  );
}

```

---

## 490. Перерисовка при нажатии на кнопку в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/pererisovka-pri-nazhatii-na-knopku-v-react-3-2

### Задача

Определить, будет ли выполнена перерисовка при нажатии на вторую кнопку 
```javascript
import { useCallback, useEffect, useMemo, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState({
    name: 'Anton',
  });

  const handleBtnClick2 = () => {
    count2.name = 'Alex';
  };

  const btnClick = () => {
    setCount(count + 1);
  };

  const handleBtnClick = useCallback(() => {
    btnClick();
  }, []);

  return (
    <div>
      <button onClick={handleBtnClick}>{count}</button>
      <button onClick={handleBtnClick2}>{count2.name}</button>
      {/* <button onClick={btnClick2}>Compute Heavy</button> */}
      <div />
      <input type="text" />
    </div>
  );
}

```

---

## 491. Вывод в консоль значения при нажатии на кнопку в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-znacheniya-pri-nazhatii-na-knopku-v-react-1

### Задача

Необходимо реализовать вывод в консоль значения name у count2 при нажатии на вторую кнопку 
```javascript
import { useCallback, useEffect, useMemo, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState({
    name: 'Anton',
  });

  const handleBtnClick2 = () => {
    count2.name = 'Alex';
  };

  const btnClick = () => {
    setCount(count + 1);
  };

  const handleBtnClick = useCallback(() => {
    btnClick();
  }, []);

  return (
    <div>
      <button onClick={handleBtnClick}>{count}</button>
      <button onClick={handleBtnClick2}>{count2.name}</button>
      {/* <button onClick={btnClick2}>Compute Heavy</button> */}
      <div />
      <input type="text" />
    </div>
  );
}

```

---

## 492. Перерисовка при нажатии на кнопку в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/pererisovka-pri-nazhatii-na-knopku-v-react-3-3

### Задача

Определить, будет ли выполнена перерисовка при нажатии на вторую кнопку
```javascript
import { useCallback, useEffect, useMemo, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState({
    name: 'Anton',
  });

  const handleBtnClick2 = () => {
    count2.name = "Alex";
    console.log(count2.name);
    setCount2(count2);
  };

  const btnClick = () => {
    setCount(count + 1);
  };

  const handleBtnClick = useCallback(() => {
    btnClick();
  }, []);

  return (
    <div>
      <button onClick={handleBtnClick}>{count}</button>
      <button onClick={handleBtnClick2}>{count2.name}</button>
      {/* <button onClick={btnClick2}>Compute Heavy</button> */}
      <div />
      <input type="text" />
    </div>
  );
}

```

---

## 493. Определение ошибки при нажатии на кнопку в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/opredelenie-oshibki-pri-nazhatii-na-knopku-v-react-1

### Задача

При нажатии на первую кнопку значение должно увеличиваться на единицу с каждым кликом, отражая количество совершенных нажатий. Однако в текущей реализации значение обновляется только один раз. Требуется определить причину некорректной работы, объяснить, почему состояние не обновляется должным образом при каждом клике, и исправить код
```javascript
import { useCallback, useEffect, useMemo, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState({
    name: 'Anton',
  });

  const handleBtnClick2 = () => {
    count2.name = "Alex";
    console.log(count2.name);
    setCount2(count2);
  };

  const btnClick = () => {
    setCount(count + 1);
  };

  const handleBtnClick = useCallback(() => {
    btnClick();
  }, []);

  return (
    <div>
      <button onClick={handleBtnClick}>{count}</button>
      <button onClick={handleBtnClick2}>{count2.name}</button>
      {/* <button onClick={btnClick2}>Compute Heavy</button> */}
      <div />
      <input type="text" />
    </div>
  );
}

```

---

## 494. Вывод в консоль №89

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-koda-5

### Задача

Определить, что будет выведено в консоль в результате выполнения кода
```javascript
let i = 10;

while (i--) {
  setTimeout(() => {
    console.log(i);
  });
}

```

---

## 495. Исправление кода для корректного вывода в консоль

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravlenie-koda-dlya-korrektnogo-vyivoda-v-konsol-1

### Задача

Необходимо исправить код, чтобы в консоль были выведены значения от 10 до 0
```javascript
let i = 10;

while (i) {
  i = i - 1;
  setTimeout(() => {
    console.log(i);
  });
}

```

---

## 496. Вывод в консоль №90

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-koda-5-2

### Задача

Определить, что будет выведено в консоль в результате выполнения кода
```javascript
var a = {};
if (a === {}) {
  a = 123;
}
console.log(a);

```

---

## 497. Вывод в консоль №91

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-koda-5-3

### Задача

Определить, что будет выведено в консоль в результате выполнения кода
```javascript
console.log([...[...'...']].length)

```

---

## 498. Вывод в консоль №92

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-koda-5-4

### Задача

Определить, что будет выведено в консоль в результате выполнения кода
```javascript
while (true) {
  setTimeout(console.log('Test'))
}

```

---

## 499. Вывод в консоль №93

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyivod-v-konsol-koda-5-5

### Задача

Определить, что будет выведено в консоль в результате выполнения кода
```javascript
setTimeout(() => {
  console.log(1);
});

const promise = new Promise((resolve) => {
  console.log(2);
  resolve(new Promise((resolve) => {
    resolve(3);
  }));
});

promise.then(message => {
  console.log(message);
});

console.log(4);

```

---

## 500. Компонент для списка комментариев с неограниченной вложенностью на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/komponent-dlya-spiska-kommentariev-s-neogranichennoj-vlozhennostyu-na-react-1

### Задача

Необходимо реализовать React-компонент Comments, который принимает один пропс — массив комментариев (comments). Каждый комментарий представляет собой объект с обязательными полями id и text, а также опциональным полем children, содержащим вложенный массив таких же комментариев. Компонент должен отображать список комментариев, где для каждого комментария выводится его текстовое содержание (text). Если у комментария есть дочерние комментарии (children), они должны отображаться вложенными списками под соответствующим родительским комментарием. Вложенность может быть неограниченной
```javascript
import React from "react";

let comments = [
  {
    id: 1,
    text: "message 1",
  },
  {
    id: 2,
    text: "message 2",
    children: [
      {
        id: 4,
        text: "message 4",
        children: [
          {
            id: 7,
            text: "message 7",
          },
          {
            id: 8,
            text: "message 8",
            children: [
              {
                id: 9,
                text: "message 9",
              },
              {
                id: 10,
                text: "message 10",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    text: "message 5",
  },
];

const App = () => {
  return (
    <div className="App">
      <Comments comments={comments} />
    </div>
  );
};

export default App;

```

---

## 501. Рефакторинг кода на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/refaktoring-koda-na-react-2

### Задача

Провести рефакторинг кода
```javascript
// dataService.js
import { ClientType as _ClientType } from './root';

export function getData(state) {
  const response = fetch('/api/companies', {
    method: 'POST',
    body: JSON.stringify({
      id: state.client.id,
      type: _ClientType.company
    })
  });

  return response;
}

export const ClientType = _ClientType;

// component.jsx
import * as React from 'react';
import { getData, ClientType } from './dataService';

function Component(props) {
  const { store } = props;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = getData(store.getState());
      const data = await (await response).json();
      setItems(data.items);
    })();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div className={`item item_type_${item.type}`} key={item.id}>
          {item.type === ClientType.person ? (
            <span>{item.name}</span>
          ) : (
            <span>Компания {item.id}</span>
          )}
          <button onClick={() => { console.log(item.id); }}>choose</button>
        </div>
      ))}
    </div>
  );
}

export default Component;

// root.jsx
import * as React from 'react';
import Component from './component';
import store from './store';

export const ClientType = {
  'company': 'company',
  'person': 'person',
};

function Root() {
  return (
    <Component store={store} />
  );
}

export default Root;

// app.jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './root';

ReactDOM.render(<Root />, document.querySelector('#app'));

```

---

## 502. Рефакторинг кода на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/refaktoring-koda-na-react-2-2

### Задача

Провести рефакторинг кода
```javascript
// dataService.js
import { ClientType as _ClientType } from './root';

export function getData(state) {
  const response = fetch('/api/companies', {
    method: 'POST',
    body: JSON.stringify({
      id: state.client.id,
      type: _ClientType.company
    })
  });

  return response;
}

export const ClientType = _ClientType;

// component.jsx
import * as React from 'react';
import { getData, ClientType } from './dataService';

function Component(props) {
  const { store } = props;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = getData(store.getState());
      const data = await (await response).json();
      setItems(data.items);
    })();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div className={`item item_type_${item.type}`} key={item.id}>
          {item.type === ClientType.person ? (
            <span>{item.name}</span>
          ) : (
            <span>Компания {item.id}</span>
          )}
          <button onClick={() => { console.log(item.id); }}>choose</button>
        </div>
      ))}
    </div>
  );
}

export default Component;

// root.jsx
import * as React from 'react';
import Component from './component';
import store from './store';

export const ClientType = {
  'company': 'company',
  'person': 'person',
};

function Root() {
  return (
    <Component store={store} />
  );
}

export default Root;

// app.jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './root';

ReactDOM.render(<Root />, document.querySelector('#app'));

```

---

## 503. Функция выполнения запроса с поддержкой повторных попыток и таймаута

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-vyipolneniya-zaprosa-s-podderzhkoj-povtornyih-popyitok-i-tajmauta-1

### Задача

Необходимо реализовать функцию retryFetch, которая принимает следующие параметры:
- url — адрес для выполнения HTTP-запроса;
- retryCount — количество попыток повторного запроса в случае ошибки;
- timeout — максимальное время ожидания ответа для одной попытки запроса.
Функция должна выполнять fetch-запрос по указанному URL и повторять его до тех пор, пока не будет получен успешный ответ или исчерпано количество попыток. Если запрос завершён успешно, функция должна вернуть результат в формате JSON. Если все попытки завершились ошибкой, функция должна выбросить последнюю полученную ошибку

---

## 504. Реализация типа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-tipa-1

### Задача

С помощью типа Man реализовать AgeType  = {age:Age;}
```javascript

//Node.js
type Man = {
    name: string;
    age: Age;
}

// { age: Age; }
// type AgeType = 

```

---

## 505. Реализация input

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizatsiya-input-1

### Задача

Реализовать controlled и uncontrolled input
```javascript

import React from "react";

export default function App() {
    const fn = () => {
        console.log("controlled input value: ");
        console.log("uncontrolled input value: ");
    };

    return (
        <form onClick={fn}> 
            <input
                placeholder="controlled field"
            />
            <input placeholder="uncontrolled field" />
            <button>Отправить заявку на кредит</button>
        </form>
    );
}

```

---

## 506. Загрузка данных

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zagruzka-dannyh

### Задача

Выполнить реализацию компонента который подгружает данные с API:

 Описание структуры ответа API:
 GET https://rickandmortyapi.com/api/character?name=rick
 {
     info: {
        count: number,
         pages: number,
        next: string | null, // url
         prev: string | null // url
    },
     results: Array<{ name: string, id: number }>
 }

В случае если отправлено имя несуществующего персонажа, API отвечает ошибкой 404
```javascript

function getPeople(name, page = 1, options = {}) {
    return fetch(
        `https://rickandmortyapi.com/api/character?name=${name}&page=${page}`,
        options
    )
    .then(res => res.json())
}

export default function App() {
    return '20 minutes adventure'
}

```


файл json:
{"info":{"count":107,"pages":6,"next":"https://rickandmortyapi.com/api/character?page=2&name=rick","prev":null},"results":[{"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg","episode":["https://rickandmortyapi.com/api/episode/1","https://rickandmortyapi.com/api/episode/2","https://rickandmortyapi.com/api/episode/3","https://rickandmortyapi.com/api/episode/4","https://rickandmortyapi.com/api/episode/5","https://rickandmortyapi.com/api/episode/6","https://rickandmortyapi.com/api/episode/7","https://rickandmortyapi.com/api/episode/8","https://rickandmortyapi.com/api/episode/9","https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/11","https://rickandmortyapi.com/api/episode/12","https://rickandmortyapi.com/api/episode/13","https://rickandmortyapi.com/api/episode/14","https://rickandmortyapi.com/api/episode/15","https://rickandmortyapi.com/api/episode/16","https://rickandmortyapi.com/api/episode/17","https://rickandmortyapi.com/api/episode/18","https://rickandmortyapi.com/api/episode/19","https://rickandmortyapi.com/api/episode/20","https://rickandmortyapi.com/api/episode/21","https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/23","https://rickandmortyapi.com/api/episode/24","https://rickandmortyapi.com/api/episode/25","https://rickandmortyapi.com/api/episode/26","https://rickandmortyapi.com/api/episode/27","https://rickandmortyapi.com/api/episode/28","https://rickandmortyapi.com/api/episode/29","https://rickandmortyapi.com/api/episode/30","https://rickandmortyapi.com/api/episode/31","https://rickandmortyapi.com/api/episode/32","https://rickandmortyapi.com/api/episode/33","https://rickandmortyapi.com/api/episode/34","https://rickandmortyapi.com/api/episode/35","https://rickandmortyapi.com/api/episode/36","https://rickandmortyapi.com/api/episode/37","https://rickandmortyapi.com/api/episode/38","https://rickandmortyapi.com/api/episode/39","https://rickandmortyapi.com/api/episode/40","https://rickandmortyapi.com/api/episode/41","https://rickandmortyapi.com/api/episode/42","https://rickandmortyapi.com/api/episode/43","https://rickandmortyapi.com/api/episode/44","https://rickandmortyapi.com/api/episode/45","https://rickandmortyapi.com/api/episode/46","https://rickandmortyapi.com/api/episode/47","https://rickandmortyapi.com/api/episode/48","https://rickandmortyapi.com/api/episode/49","https://rickandmortyapi.com/api/episode/50","https://rickandmortyapi.com/api/episode/51"],"url":"https://rickandmortyapi.com/api/character/1","created":"2017-11-04T18:48:46.250Z"},{"id":8,"name":"Adjudicator Rick","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/8.jpeg","episode":["https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/8","created":"2017-11-04T20:03:34.737Z"},{"id":15,"name":"Alien Rick","status":"unknown","species":"Alien","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/15.jpeg","episode":["https://rickandmortyapi.com/api/episode/10"],"url":"https://rickandmortyapi.com/api/character/15","created":"2017-11-04T20:56:13.215Z"},{"id":19,"name":"Antenna Rick","status":"unknown","species":"Human","type":"Human with antennae","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"unknown","url":""},"image":"https://rickandmortyapi.com/api/character/avatar/19.jpeg","episode":["https://rickandmortyapi.com/api/episode/10"],"url":"https://rickandmortyapi.com/api/character/19","created":"2017-11-04T22:28:13.756Z"},{"id":22,"name":"Aqua Rick","status":"unknown","species":"Humanoid","type":"Fish-Person","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/22.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/22","created":"2017-11-04T22:41:07.171Z"},{"id":48,"name":"Black Rick","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/48.jpeg","episode":["https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/48","created":"2017-11-05T11:15:26.044Z"},{"id":56,"name":"Bootleg Portal Chemist Rick","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/56.jpeg","episode":["https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/56","created":"2017-11-05T11:34:16.447Z"},{"id":69,"name":"Commander Rick","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/69.jpeg","episode":["https://rickandmortyapi.com/api/episode/22"],"url":"https://rickandmortyapi.com/api/character/69","created":"2017-11-30T11:28:06.461Z"},{"id":72,"name":"Cool Rick","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (K-83)","url":"https://rickandmortyapi.com/api/location/26"},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/72.jpeg","episode":["https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/72","created":"2017-11-30T11:41:11.542Z"},{"id":74,"name":"Cop Rick","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/74.jpeg","episode":["https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/74","created":"2017-11-30T11:48:18.950Z"},{"id":78,"name":"Cowboy Rick","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/78.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/78","created":"2017-11-30T14:15:18.347Z"},{"id":82,"name":"Cronenberg Rick","status":"unknown","species":"Cronenberg","type":"","gender":"Male","origin":{"name":"Cronenberg Earth","url":"https://rickandmortyapi.com/api/location/12"},"location":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"image":"https://rickandmortyapi.com/api/character/avatar/82.jpeg","episode":["https://rickandmortyapi.com/api/episode/6","https://rickandmortyapi.com/api/episode/10"],"url":"https://rickandmortyapi.com/api/character/82","created":"2017-11-30T14:28:54.596Z"},{"id":86,"name":"Cyclops Rick","status":"Dead","species":"Humanoid","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/86.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/86","created":"2017-11-30T20:53:10.382Z"},{"id":103,"name":"Doofus Rick","status":"unknown","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (J19ζ7)","url":"https://rickandmortyapi.com/api/location/31"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/103.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/22"],"url":"https://rickandmortyapi.com/api/character/103","created":"2017-12-01T12:29:27.984Z"},{"id":119,"name":"Evil Rick","status":"Dead","species":"Humanoid","type":"Robot","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/119.jpeg","episode":["https://rickandmortyapi.com/api/episode/10"],"url":"https://rickandmortyapi.com/api/character/119","created":"2017-12-26T16:17:16.472Z"},{"id":135,"name":"Garment District Rick","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/135.jpeg","episode":["https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/135","created":"2017-12-26T20:51:43.614Z"},{"id":164,"name":"Insurance Rick","status":"unknown","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/164.jpeg","episode":["https://rickandmortyapi.com/api/episode/10"],"url":"https://rickandmortyapi.com/api/character/164","created":"2017-12-29T17:03:08.645Z"},{"id":165,"name":"Investigator Rick","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/165.jpeg","episode":["https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/165","created":"2017-12-29T17:05:15.514Z"},{"id":187,"name":"Juggling Rick","status":"unknown","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/187.jpeg","episode":["https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/187","created":"2017-12-29T18:59:47.440Z"},{"id":215,"name":"Maximums Rickimus","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Rick's Memories","url":"https://rickandmortyapi.com/api/location/126"},"image":"https://rickandmortyapi.com/api/character/avatar/215.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/51"],"url":"https://rickandmortyapi.com/api/character/215","created":"2017-12-30T14:27:55.489Z"}]}

---

## 507. Функция выдачи купюр из банкомата

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funkciya-vydachi-kupyur-iz-bankomata

### Задача

Дан объект limits, в котором ключами являются номиналы купюр, а значениями — их количество. Необходимо реализовать функцию atm(summ, limits), которая принимает целевую сумму для выдачи (summ) и объект с остатками купюр (limits). Функция должна вернуть новый объект с подбором купюр, необходимых для выдачи заданной суммы, аналогичный структуре limits. Также она должна обновить исходный объект limits , уменьшая количество использованных купюр. Если указанную сумму невозможно собрать доступными купюрами, то:
- объект limits остаётся без изменений;
- функция возвращает сообщение о невозможности выдачи указанной суммы.

---

## 508. Функция сортировки билетов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funkciya-sortirovki-biletov

### Задача

Д
```javascript
const tickets = [
  { from: 'Калининград', to: 'Челябинск' },
  { from: 'Москва', to: 'Калининград' },
  { from: 'Пятигорск', to: 'Краснодар' },
  { from: 'Челябинск', to: 'Астана' },
  { from: 'Краснодар', to: 'Москва' },
];

```ан объект tickets, представляющий собой массив неотсортированных билетов. Каждый билет описывается объектом с полями from и to, обозначающими пункт отправления и пункт назначения соответственно. Необходимо реализовать функцию sortTickets(tickets), которая отсортирует билеты таким образом, чтобы они шли в порядке перемещения путешественника — от начальной точки маршрута до конечной.
Условия:
- Гарантируется, что билеты образуют непрерывный маршрут без циклов.
- Сложность алгоритма должна быть O(N) .
- Ограничений по использованию памяти нет.
Результатом работы функции должен быть отсортированный массив билетов

---

## 509. Оптимизация сервиса на Node.js

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 2, 'title': 'System Design', 'slug': 'system-design'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/optimizaciya-servisa-na-nodejs

### Задача

Есть сервис на Node.js, который:
1. Обрабатывает запросы фронта
2. Делает SSR-рендеринг
3. Логгирует запросы фронта, пишет лог в консоль, отдельный сервис на стороне тачки собирает из консоли лог и отправляет в систему логгирования
4. При обработке запросов фронта нода ходит в другие сервисы бэкенда, агрегирует данные и отдаёт фронту
Проблема: 
Если дать много RPS на сервис, то начинается троттл запросов. Троттл происходит из-за забивания console.log() на ноде. console.log — синхронная операция, которая может положить поток.
Задача:
Требуется определить, как можно оптимизировать работу сервиса

---

## 510. Замыкание счетчика

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zamykanie-schetchika

### Задача

```javascript
const createCounter = () => {
    let count = 0;

    const increment = () => {
        count++;
    };

    const decrement = () => {
        count--;
    };

    return {
        count,
        increment,
        decrement
    };
};

const result = createCounter();

result.increment();
result.increment();
result.decrement();

// console.log(result.count);

```

---

## 511. Исправить код

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-kod

### Задача

```javascript
import React, { useState, useEffect } from "react";

// Имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
    const [number, setNumber] = useState();
    const [scroll, setScroll] = useState();

    useEffect(async () => {
        setNumber(await fetchRandomNumber());
        window.addEventListener("scroll", () => setScroll(window.scrollY));
        return () =>
            window.removeEventListener("scroll", () => setScroll(window.scrollY));
    });

    return (
        <div>
            <div>Number: {number}</div>
            <div>Scroll: {scroll}</div>
        </div>
    );
};

export default NumberAndScroll;

```

---

## 512. Последовательное выполнение промисов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/posledovatelnoe-vypolnenie-promisov

### Задача

```javascript
const request = () => new Promise((res) => setTimeout(() => { 
    const result = Math.random(); 
    console.log(`promise run for: ${result}`); 
    res(result); 
}, 1000));

const chainPromise = (arr) => {};

(async () => { 
    const result = await chainPromise([request, request, request]); 
    console.log(result); // must be [number, number, number] 
})();

```

---

## 513. Вывод в консоль №94

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol

### Задача

```javascript
function makeBook() {
    let book = [];
    let l = 0;
    while (l < 10) {
        const page = function () {
            console.log(l);
        };
        book.push(page);
        l++;
    }
    return book;
}

let reader = makeBook();

reader[0]();
reader[5]();

```

---

## 514. Исправить ошибки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ispravit-oshibki

### Задача

Есть реализация компонента, от которого требуется 2 вещи:
1) выводить текущее значение вертикального скролла окна (window.scrollY)
 2) после монтирования асинхронно получить число и вывести его
Нужно найти, объяснить и исправить как можно больше проблем в реализации
```javascript
import React, { useState, useEffect } from 'react';

// Имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
    const [number, setNumber] = useState();
    const [scroll, setScroll] = useState();

    useEffect(async () => {
        setNumber(await fetchRandomNumber());
        window.addEventListener('scroll', () => setScroll(window.scrollY));
        return () => window.removeEventListener('s[roll', () => setScroll(window.scrollY));
    });

    return (
        <div>
            <div> Number: { number } </div>
            <div> Scroll: { scroll } </div>
        </div>
    );
};

```

---

## 515. Замыкающий счетчик

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zamykayushij-schetchik

### Задача

Функция createCounter, которая работает следующим образом:  
При вызове createCounter(n) функции возвращает другую функцию.  
Эта возвращаемая функция при каждом вызове увеличивает внутреннее значение счетчика на 1 и возвращает текущую сумму.  
Начальное значение счетчика устанавливается аргументом n при вызове createCounter(n).  
Если n не передано, начальное значение считается равным 0.  
```javascript
/*
Пример:  
const counter = createCounter(5);  
console.log(counter()); // Вывод: 6  
console.log(counter()); // Вывод: 7  
console.log(counter()); // Вывод: 8  
*/

const anotherCounter = createCounter();  
console.log(anotherCounter()); // Вывод: 1  
console.log(anotherCounter()); // Вывод: 2  

function createCounter(n) {}}

```

---

## 516. Ограничитель параллельных операций

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ogranichitel-parallelnyh-operacij

### Задача

Функция runWithConcurrencyLimit(tasks, limit), которая принимает массив асинхронных функций tasks и число limit, определяющее максимальное количество одновременно выполняющихся задач.  

Каждая функция в массиве tasks возвращает Promise.  
Функция runWithConcurrencyLimit должна запускать задачи с учетом ограничений limit на максимальное количество одновременно выполняющихся задач.  
Функция должна возвращать Promise, который разрешается массивом результатов выполнения задач в порядке их расположения в исходном массиве tasks.  
Если какая-либо задача завершается с ошибкой, нужно сохранить ошибку в результате массива под тем же индексом.  
Выполнение остальных задач не должно прерываться при возникновении ошибки в одной из них. 
```javascript
/*
Пример использования:  
const tasks = [  
  () => new Promise(resolve => setTimeout(() => resolve(1), 2000)),  
  () => new Promise(resolve => setTimeout(() => resolve(2), 2000)),  
  () => new Promise((_, reject) => setTimeout(() => reject('Error in task 3'), 1000)),  
  () => new Promise(resolve => setTimeout(() => resolve(4), 4000)),  
]  
*/

runWithConcurrencyLimit(tasks, 2)  
.then(results => console.log(results))  
.catch(err => console.error(err));  

// Ожидаемый вывод после примерно 7 секунд:  
// [1, 2, 'Error in task 3', 4]  

// limit always positive (>= 1)  
function runWithConcurrencyLimit(tasks, limit) {}

```

---

## 517. Вывод в консоль №99

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-koda

### Задача

Определить, что будет выведено в консоль в результате выполнения кода и объяснить почему
```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
}).then(() => {
  console.log(4);
});

queueMicrotask(() => {
  console.log(5);
});

setTimeout(() => {
  console.log(6);
}, 0);

console.log(7);

```

---

## 518. Создание HTTP-сервера на JS

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-http-servera-na-js

### Задача

Необходимо создать простой HTTP-сервер на JS

---

## 519. Реализация счетчика на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-schetchika-na-react

### Задача

Необходимо дополнить код на React, чтобы он соответствовал следующим требованиям:
1. Счётчик должен отображать текущее значение.
2. Кнопка "Увеличить" должна увеличивать значение счётчика на 1 при каждом клике.
3. Двойной клик на кнопке должен сбрасывать счётчик до нуля.
4. Используйте функциональные компоненты и хуки (useState и useEffect).
Подсказки:
1. Используйте useState для управления состоянием счётчика.
2. Для обработки двойного клика добавьте обработчик события onDoubleClick к кнопке.
```javascript
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/coderpad_logo.svg" />
        </div>
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
          <span>React App</span>
        </div>
      </div>
      <div className="content">
        <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
        <p>Hello React!</p>
      </div>
      <div className="footer">
        Use the Shell to install new packages.
      </div>
    </div>
  );
}

export default App;

```

---

## 520. Реализация Promise.all №6

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-promiseall

### Задача

Необходимо написать свою функцию promiseAll, которая является аналогом Promise.all.
Требования:
- на вход поступает массив промисов
- реджект, если хотя бы один промис упал
- резолв, если все промисы успешно выполнены
- в случае резолва порядок результатов должен сохраняться
- в случае реджекта сразу реджект, не дожидаясь остальных промисов

---

## 521. Ререндеринг компонентов по кнопке в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/rerendering-komponentov-po-knopke-v-react

### Задача

Определить, какие компоненты будут ререндериться на кнопку Render и почему
```javascript
import React from 'react';

export default function App() {
  const forceUpdate = useForceUpdate();
  return (
    <div style={{ margin: '20px', padding: '20px', border: '2px solid green' }}>
      <button onClick={forceUpdate}>Render</button>
      <RenderCount />
      <Parent />
    </div>
  );
}

const Parent = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form style={{ margin: '20px', padding: '20px', border: '2px solid blue' }}>
      Input value is: {value}
      <RenderCount />
      <Child onChange={handleChange} />
    </form>
  );
};

const Child = ({ onChange }) => {
  return (
    <div style={{ padding: '20px', margin: '20px', border: '2px solid red' }}>
      <input type="text" name="value" onChange={onChange} />
      <RenderCount />
    </div>
  );
};

function RenderCount() {
  const renderCount = React.useRef(1);
  React.useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div style={{ marginTop: '10px' }}>
      Render count: {renderCount.current}
    </div>
  );
}

```

---

## 522. Ререндеринг компонентов при наборе текста в инпуте в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/rerendering-komponentov-pri-nabore-teksta-v-inpute-v-react

### Задача

Определить, будет ли ререндериться компонент Child при наборе текста в инпуте и почему
```javascript
import React from 'react';

export default function App() {
  const forceUpdate = useForceUpdate();
  return (
    <div style={{ margin: '20px', padding: '20px', border: '2px solid green' }}>
      <button onClick={forceUpdate}>Render</button>
      <RenderCount />
      <Parent />
    </div>
  );
}

const Parent = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form style={{ margin: '20px', padding: '20px', border: '2px solid blue' }}>
      Input value is: {value}
      <RenderCount />
      <Child onChange={handleChange} />
    </form>
  );
};

const Child = ({ onChange }) => {
  return (
    <div style={{ padding: '20px', margin: '20px', border: '2px solid red' }}>
      <input type="text" name="value" onChange={onChange} />
      <RenderCount />
    </div>
  );
};

function RenderCount() {
  const renderCount = React.useRef(1);
  React.useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div style={{ marginTop: '10px' }}>
      Render count: {renderCount.current}
    </div>
  );
}

```

---

## 523. Оптимизация кода на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/optimizaciya-koda-na-react

### Задача

Необходимо оптимизировать данный код на React, чтобы компонент Child не ререндерился при наборе текста в инпуте
```javascript
import React from 'react';

export default function App() {
  const forceUpdate = useForceUpdate();
  return (
    <div style={{ margin: '20px', padding: '20px', border: '2px solid green' }}>
      <button onClick={forceUpdate}>Render</button>
      <RenderCount />
      <Parent />
    </div>
  );
}

const Parent = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form style={{ margin: '20px', padding: '20px', border: '2px solid blue' }}>
      Input value is: {value}
      <RenderCount />
      <Child onChange={handleChange} />
    </form>
  );
};

const Child = ({ onChange }) => {
  return (
    <div style={{ padding: '20px', margin: '20px', border: '2px solid red' }}>
      <input type="text" name="value" onChange={onChange} />
      <RenderCount />
    </div>
  );
};

function RenderCount() {
  const renderCount = React.useRef(1);
  React.useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div style={{ marginTop: '10px' }}>
      Render count: {renderCount.current}
    </div>
  );
}

```

---

## 524. Реализация компонента InputAutocomplete на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-komponenta-inputautocomplete-na-react

### Задача

Дано API, предоставляющее список героев из фильма «Звёздные войны». Необходимо для данного кода реализовать компонент InputAutocomplete на React, который обеспечивает функцию автодополнения при вводе имени героя. При вводе пользователем начальной части строки компонент должен отображать список подходящих вариантов подсказок, основываясь на данных, полученных через указанное API
Описание API.
```javascript
GET https://swapi.dev/api/people?search=skywalker&page=1
{
  next: string | null         // url
  results: Array({ name: string, url: string })  // max length 10, unique url
}

```


Код.
```javascript
import React from 'react';

function getPeople(search, page = 1, options = {}) {
  return fetch(
    `https://swapi.dev/api/people?search=${search}&page=${page}`,
    options
  )
    .then((res) => res.json())
    .then((data) => data);
}

export default function App() {
  return 'Hello there!';
}

```

---

## 525. Преобразование функции в чистую

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/preobrazovanie-funkcii-v-chistuyu

### Задача

Необходимо удалить из функции add всё, что противоречит понятию чистой функции
```javascript
let x = 2;

const add = async (params, y) => {
  params.value = y;
  y += y + Math.random(params.value);
  x += y;

  console.log('doubling', x);

  const { data } = await axios({ method: 'get', url: '/' });

  const elem = document.getElementById('elem');
  const width = elem.getBoundingClientRect().width;

  return x + data + width;
};

add({ value: 4 }, 1);

```

---

## 526. Рефакторинг React компонента

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/refaktoring-react-komponenta

### Задача

Дан React компонент Game. Необходимо провести рефакторинг кода
```javascript
export const Game = ({ gameId }) => {
  const siteVersion = useSelector(selectSiteVersion); // 'mobile' | 'desktop'

  const [isLoading, setIsLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [game, setGame] = useState({ title: '', description: '' });

  if (!gameId) {
    return <div>Empty</div>;
  }

  const api_params = {
    id: gameId,
    mode: 'real',
    platform: siteVersion,
  };

  const loadGame = async () => {
    setIsLoading(true);
    const game = await requestGame(api_params);
    setIsLoading(false);
    setGame(game);
  };

  if (siteVersion === 'mobile') {
    useEffect(async () => {
      await loadGame();
    });
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', () =>
      setIsFullScreen(!isFullScreen)
    );
  });

  return (
    <div>
      <div>{game.title}</div>
      <div>{game.description}</div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

```

---

## 527. Реализация функции каррирования

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-funkcii-karrirovaniya

### Задача

Необходимо реализовать функцию, имеющую следующий интерфейс и семантику работы:
sum() == 0
sum(1)() == 1
sum(1)(4)() == 5
sum(5)(2)(2)() == 9

---

## 528. Функция обновления значения в массиве с неопределенной вложенностью

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funkciya-obnovleniya-znacheniya-v-massive-s-neopredelennoj-vlozhennostyu

### Задача

Дан массив с объектами, имеющий вложенность массивов с объектами, которая может иметь любую глубину. Каждый объект имеет ключи name и label, которые могут повторяться на любой вложенности. Требуется реализовать функцию updateValue, которая будет обновлять значение по заданному ключу в объекте с заданным значением name и label.
```javascript
const data = [
  {
    name: 'John',
    label: 'Developer',
    children: [
      {
        name: 'Jane',
        label: 'Designer',
        children: [
          {
            name: 'Jim',
            label: 'Designer',
            children: []
          }
        ]
      },
      {
        name: 'Jane',
        label: 'Designer',
        children: []
      }
    ]
  },
  {
    name: 'Alice',
    label: 'Manager',
    children: []
  }
];

function updateValue(data, name, label, key, value) {
  // ...
}

```

---

## 529. Объявление переменной с типом в TypeScript

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obyavlenie-peremennoj-s-tipom-v-typescript

### Задача

Необходимо объявить переменную с типом в TypeScript

---

## 530. Реализация Promise.all №4

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-promiseall-4

### Задача

Написать свою реализацию функции Promise.all

---

## 531. Реализация Promise.all №7

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-promiseall-7

### Задача

Необходимо реализовать функцию allPromises, которая принимает массив промисов и возвращает результат их выполнения, в качестве аналога метода Promise.all()
```javascript
const allPromise = () => {
  
}

allPromise(promises).then(response => console.log(response))

```

---

## 532. Вывод в консоль №95

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-95

### Задача

```javascript
const fnName = "fn3";

const module = {
    fn1: function () {
        console.log(this);
        const f = () => console.log(this);
        f();
    },
    fn2() {
        console.log(this);
    },
    [fnName]: () => console.log(this),
};

console.log(this); //

module.fn1(); //
module.fn2(); //
module[fnName](); //

const extModule = {
    new: 123,
};
const val = module.fn1.bind(extModule);
val.bind(this); //

module.fn2.call(extModule); //
module[fnName].apply(extModule); //

```

---

## 533. Вывод в консоль №96

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-96

### Задача

```javascript
setTimeout(function timeout() {
    console.log("T");
}, 0);

var p = new Promise(function (resolve, reject) {
    console.log("F");
    resolve();
});

p.then(function () {
    console.log("L");
});

console.log("G");

```

---

## 534. Вывод в консоль №97

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-97

### Задача

```javascript
function l() {
    console.log(c);
    var c = 5;
    setTimeout(function() {
        console.log(c);
        var c = 10;
        console.log(c);
    }, 100);
    console.log(c);
};

l()

```

---

## 535. Вывод в консоль №98

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-98

### Задача

```javascript
var b = 50;

function k() {
    console.log(b);
    if (true) {
        let b = 150;
        console.log(b);
    }
    console.log(b);
}

k();

```

---

## 536. Вывод в консоль №100

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-100

### Задача

Определить, что будет выведено в консоль в результате выполнения кода
```javascript
const userService = {
  currentFilter: 'active',
  users: [
    { name: 'Alex', status: 'active' },
    { name: 'Nick', status: 'deleted' },
  ],
  getFilteredUsers: function() {
    return this.users.filter(function(user) {
      return user.status === this.currentFilter;
    });
  }
};

console.log(userService.getFilteredUsers());

```

---

## 537. Вывод в консоль №101

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-101

### Задача

Определить, в каком порядке выведутся сообщения в результате выполнения данного кода и почему
```javascript
console.log(1);

setTimeout(function() {
  console.log(2);
});

Promise.resolve(3).then(console.log);

console.log(4);

setTimeout(function() {
  console.log(5);
}, 0);

console.log(6);

```

---

## 538. Вывод в консоль №102

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-102

### Задача

Определить, что будет выведено в консоль в результате выполнения кода
```javascript
function Count() {
  let counter = 0;

  return () => {
    console.log(counter++);
  };
}

const c = new Count();

c(); // 
c(); // 

c.counter = 0;

c(); // 

const b = new Count();

b(); // 

```

---

## 539. Вывод в консоль №103

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-103

### Задача

Определить, что будет выведено в консоль в результате выполнения кода
```javascript
for (var i = []; i.length < 3; i.push(2)) {
  setTimeout(() => {
    console.log(i);
  }, i.length * 1000);
}

```

---

## 540. Вывод в консоль №104

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-104

### Задача

Определить, что будет выведено в консоль в результате выполнения кода
```javascript
setTimeout(() => console.log(1));

Promise.reject(2).catch(console.log);

Promise.resolve().then(() => setTimeout(() => console.log(3)));

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

setTimeout(() => console.log(6));

console.log(7);

```

---

## 541. Цвет текста в элементе div

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/cvet-teksta-v-elemente-div

### Задача

Определить, каким будет цвет текста в элементе <div id="element" class="element">, учитывая правила CSS-специфичности.
```html
<html>
<head>
  <style>
    #element {
      color: red;
    }

    .element {
      color: blue;
    }

    div.element {
      color: yellow;
    }

    div.element {
      color: magenta;
    }
  </style>
</head>
<body>
  <div id="element" class="element">
    Some dummy text
  </div>
</body>
</html>

```

---

## 542. Цвет текста в элементе span

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/cvet-teksta-v-elemente-span

### Задача

Определить, каким будет цвет текста в элементе <span>, учитывая inline-стили, наследование и специфику HTML.
```html
<html>
<head>
  <title>CSS test 2</title>
</head>
<body style="color: red; font-weight: bold; display: block; background: url('bg.jpg');">
  <div>
    Some test text
    <div>
      Lorem ipsum etc...
      <span>
        One more dummy text
      </span>
    </div>
  </div>
</body>
</html>

```

---

## 543. Анимация с использованием CSS-переменных

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/animaciya-s-ispolzovaniem-css-peremennyh

### Задача

Проверить корректность использования CSS custom properties в @keyframes, а также корректность применения медиа-запросов и синтаксиса transform.
```html
<html>
<head>
  <style>
    :root {
      --target-y: 100vh;
    }

    @media (max-height: 500px) {
      :root {
        --target-y: 400px;
      }
    }

    @keyframes fromTarget {
      0% {
        transform: translate3d(0, var(--target-y), 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }

    #target {
      animation: fromTarget 1s ease-in;
    }
  </style>
</head>
<body>
  <div id="target"></div>
</body>
</html>

```

---

## 544. Контекст this при вызове функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-this-pri-vyzove-funkcii

### Задача

Определить, что будет выведено в консоль при вызове c.a() и c.b() в строгом режиме ("use strict"), и объяснить поведение this.
```javascript
"use strict";
// рассуждение вслух более ценно чем верный ответ

function a() {
  console.log(this);
}

function b() {
  a();
}

const c = {
  a,
  b,
};

c.a();
c.b();

```

---

## 545. Контекст this в стрелочных функциях

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-this-v-strelochnyh-funkciyah

### Задача

Определить, какие значения будут выведены в консоль при вызове c.a() и c.b(), учитывая особенности стрелочных функций и строгий режим.
```javascript
"use strict";
// рассуждение вслух более ценно чем верный ответ

const a = () => {
  console.log(this);
};

const c = {
  a,
  b: () => {
    console.log(this);
  },
};

c.a();
c.b();

```

---

## 546. Бесконечный цикл и отрисовка в браузере

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/beskonechnyj-cikl-i-otrisovka-v-brauzere

### Задача

Определить, что произойдёт при выполнении кода в браузере, и какое поведение увидит пользователь.
```html
<html>
<head>
  <title>JS test 1</title>
</head>
<body>
  <div id="container">
    0
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const hostEl = document.getElementById('container');
      let counter = 0;

      while (true) {
        hostEl.innerText = counter++;
      }
    });
  </script>
</body>
</html>

```

---

## 547. Обновление значения с использованием setTimeout в цикле

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obnovlenie-znacheniya-s-ispolzovaniem-settimeout-v-cikle

### Задача

Определить, как поведёт себя страница при выполнении кода, где внутри бесконечного цикла используется setTimeout.
```html
<html>
<head>
  <title>JS test 2</title>
</head>
<body>
  <div id="container">0</div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const hostEl = document.getElementById('container');
      let counter = 0;

      while (true) {
        setTimeout(() => {
          hostEl.innerText = counter++;
        }, 10);
      }
    });
  </script>
</body>
</html>

```

---

## 548. Изменение DOM при клике на кнопку в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/izmenenie-dom-pri-klike-na-knopku-v-react

### Задача

Определить, как изменится содержимое DOM после нажатия на кнопку, с учётом состояния useState и обработчика onClick.
```javascript
import React, { useState } from 'react';

function SimpleButton(props) {
  const [txt, setTxt] = useState(props.text || 'a');
  const changeText = () => {
    setTxt(txt + txt);
  }

  return (
    <button onClick={changeText}>
      {txt}
    </button>
  );
}

```

---

## 549. Изменение списка при клике на кнопку в React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/izmenenie-spiska-pri-klike-na-knopku-v-react

### Задача

Определить, как изменится порядок элементов в DOM при нажатии на кнопку, с учётом работы useState и метода reverse.
```javascript
import React, { useState } from 'react';

function SimpleList(props) {
  const [list, setList] = useState(props.list || ['a', 'b']);
  const rotateList = () => {
    setList([...list.reverse()]);
  };

  return (
    <div>
      {list.map((txt, id) => {
        return <div key={id}>{txt}</div>;
      })}
      <button onClick={rotateList}>rotate</button>
    </div>
  );
}

```

---

## 550. Создание и выполнение исполняемого файла

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-i-vypolnenie-ispolnyaemogo-fajla

### Задача

Анализировать, какие действия выполняются при запуске скрипта и что произойдёт в файловой системе.
```shell
bash
# !/bin/bash
# рассуждение вслух более ценно чем верный ответ

cd ~
mkdir foo
touch bar && echo "ls foo" >> bar
chmod +x bar
./bar

```

---

## 551. Поведение var и setTimeout в цикле

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-var-i-settimeout-v-cikle

### Задача

Определить, что будет выведено в консоль при выполнении кода, с учётом области видимости переменной var и асинхронности setTimeout.
```javascript
for (var i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}

```

---

## 552. Оплата за проживание в отеле

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/oplata-za-prozhivanie-v-otele

### Задача

Необходимо написать функцию расчета стоимости проживания посетителя в отеле.
Функция может принимать 2 аргумента:
1. Количество ночей проживания в отеле (обязательный параметр)
2. Дата заселения (необязательный параметр). Если значение не указано, то отсчёт ведется от текущего дня.

Стоимость проживания:
- в будние дни (понедельник–пятница): 1500 руб
- в выходные дни (суббота, воскресенье): 2200 руб
```javascript
function bookingCalculate(nights, startDate) {
}

console.log(bookingCalculate(7)); // 11900
console.log(bookingCalculate(3, new Date('2023-11-10'))); // 5900

```

---

## 553. Порядок вывода в консоль

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vyvoda-v-konsol

### Задача

Определить, какие сообщения и в какой последовательности выведутся в консоль при выполнении кода. Учитываются особенности работы Event Loop, очередей микрозадач и макрозадач.
```javascript
<script>
console.log(1);

new Promise((res) => {
  console.log(4);
  queueMicrotask(() => console.log(5));
  setTimeout(() => console.log(6));
  res();
}).then(() => {
  queueMicrotask(() => console.log(7));
  console.log(8);
})

console.log(9);
queueMicrotask(() => console.log(2));
setTimeout(() => console.log(3));
</script>

```

---

## 554. Доступ к вложенному свойству объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/dostup-k-vlozhennomu-svojstvu-obekta

### Задача

Реализовать функцию, которая получает значение из вложенного объекта по строковому пути (через точку). Если путь не существует — возвращается undefined.
```javascript
<script>
function getProp(obj, path) {
  //code...
}

const obj = {
  a: {
    b: 10,
    c: {
      d: {}
    }
  }
};

getProp(obj, 'a.b');        // => 10
getProp(obj, 'a.c.d');      // => {}
getProp(obj, 'a.c.z.f.s');  // => undefined
</script>

```

---

## 555. Порядок вывода в консоль

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** None
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vyvoda-v-konsol_2

### Задача

Определить, какие значения и в каком порядке будут выведены в консоль с учётом работы Event Loop, очередей микрозадач и макрозадач.
```javascript
console.log(1);

setTimeout(() => console.log(2), 0);

console.log(3);

Promise.resolve()
  .then(() => console.log(4))
  .then(() => console.log(5))
  .then(() => console.log(6))
  .then(() => setTimeout(() => console.log(7), 0))
  .then(() => {
    console.log(8);
    return 9;
  })
  .then(console.log);

```

---

## 556. Контекст выполнения функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-vypolneniya-funkcii

### Задача

Определить, какие значения будут выведены в консоль при вызове метода sayName в разных контекстах.
```javascript
const obj1 = {
  name: "Alice",
  sayName: function() {
    console.log(this.name);
  }
}

const obj2 = {
  name: "John",
  sayName: obj1.sayName
}

const sayName = obj1.sayName;

obj1.sayName();   // ?
obj2.sayName();   // ?
sayName();        // ?

```

---

## 557. Исключение свойства из типа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/isklyuchenie-svojstva-iz-tipa

### Задача

Необходимо создать тип, основанный на TLibrary, но без свойства meta.
```javascript
type TLibrary = {
  books: TBook[],
  count: number,
  genres: string[],
  meta: TMeta
};

type TLibraryWithoutMeta = // ?

```

---

## 558. Компонент App – код-ревью

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/komponent-app-kod-revyu

### Задача

Провести код-ревью React-компонента. Проверить корректность отображения данных, key-пропса, сортировки и оптимизации.
```javascript
import "./styles.css";
import { Person } from "./Person";
import { useEffect, useState } from "react";

const people = [
  {
    id: 2,
    name: "Виктор",
    lastName: "Вью",
    age: 26,
  },
  {
    id: 3,
    name: "Константин",
    lastName: "Ангулрин",
    age: 20,
  },
  {
    id: 1,
    name: "Илия",
    lastName: "Реактова",
    age: 23,
  },
];

export default function App() {
  const date = new Date().toLocaleTimeString();
  const [time, setTime] = useState(date);

  const content = people.map(({ name, lastName, id }) => (
    <Person key={id} name={name} lastName={lastName} id={id} />
  ));

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  console.log("render App");

  return (
    <div className="App">
      Time: {date}
      {content}
    </div>
  );
}

```

---

## 559. Анализ и переписывание функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/analiz-i-perepisyvanie-funkcii

### Задача

Определить, что делает функция wtf(s), и как её можно переписать другим способом.
```javascript
function wtf(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {
  }
  return o;
}

```

---

## 560. Поведение this в методах класса и объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-this-v-metodah-klassa-i-obekta

### Задача

Определить, что будет выведено в консоль при вызове методов say и say2 у экземпляра класса и обычного объекта. Учитываются отличия между стрелочной функцией и обычной функцией.
```javascript
class Cat {
  sound = 'meow';
  say = () => {
    console.log(this.sound);
  };
  say2() {
    console.log(this.sound);
  }
}

const myCat = {
  sound: 'meow',
  say: () => {
    console.log(this.sound);
  },
  say2: function () {
    console.log(this.sound);
  }
}

const cat = new Cat();
cat.say();     // ?
cat.say2();    // ?
myCat.say();   // ?
myCat.say2();  // ?

```

---

## 561. Порядок вывода логов (event loop)

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vyvoda-logov-event-loop

### Задача

Определить порядок вывода значений в консоль. Учитываются приоритеты: синхронный код → microtasks (.then, .catch) → macrotasks (setTimeout).
```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

```

---

## 562. Порядок вывода логов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vyvoda-logov

### Задача

Определить порядок вывода значений в консоль. Учитываются синхронные вызовы, микрозадачи (Promise.then, .catch), макрозадачи (setTimeout).
```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3)
  .catch(console.log)
  .then(() => console.log(7));

new Promise(resolve => setTimeout(resolve))
  .then(() => console.log(4));

Promise.resolve(5)
  .then(console.log)
  .then(() => console.log(8));

console.log(6);

```

---

## 563. Обработка ошибки и продолжение цепочки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obrabotka-oshibki-i-prodolzhenie-cepochki

### Задача

Разобрать поведение цепочки промисов с reject, catch, return, последующими .then. Объяснить, как происходит передача значений дальше по цепочке.
```javascript
Promise.reject(5)
  .then(console.log)
  .catch((err) => {
    console.log(err);
    return 10;
  })
  .then(() => 10)
  .then((data) => console.log(data * 2));

```

---

## 564. Последовательная обработка промисов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/posledovatelnaya-obrabotka-promisov

### Задача

Обработать массив промисов по очереди: переход к следующему начинается только после завершения предыдущего. Использовать цикл.
```javascript
let arr = [promise1, promise2, promise3, ...rest];

// Обработать все промисы последовательно

```

---

## 565. Проверка типа объекта — утка или гусь

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/proverka-tipa-obekta-utka-ili-gus

### Задача

Определить, как проверить, что переменная animal является объектом типа Duck, а не Goose. Использовать проверку по структуре.
```javascript
type Goose = {
  bite: VoidFunction;
  color: string;
};

type Duck = {
  bite: VoidFunction;
  weight: number;
};

const animal = Math.random() > 0.5
  ? { bite: () => console.log('аи!'), color: 'white' }
  : { bite: () => {}, weight: 32 };

// Реализовать проверку, что это именно утка

```

---

## 566. Утилита для работы со временем

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/utilita-dlya-raboty-so-vremenem

### Задача

Реализовать утилиту, которая возвращает текущее время в формате HH:MM:SS.
```javascript
export function getCurrentTime(): string {
  // ...
}

```

---

## 567. Поведение компонента при условном рендеринге и useEffect

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-komponenta-pri-uslovnom-renderinge-i-useeffect

### Задача

Разобрать поведение компонента React при условном возврате JSX внутри if и наличии useEffect, зависящего от пропса.
```javascript
function Component(props) {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(s => s + 1);
  };

  useEffect(() => {
    let update = counter * 2 + props.value;
    console.log(update);
  }, [props.value]);

  if (counter % 2 === 0) {
    return (
      <>
        <MyButton handleClick={handleClick} />
      </>
    );
  }

  return (
    <>
      <div>{counter}</div>
      <MyButton handleClick={handleClick} />
    </>
  );
}

```

---

## 568. Отправка значения при размонтировании компонента

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/otpravka-znacheniya-pri-razmontirovanii-komponenta

### Задача

Реализовать отправку значения counter в аналитику при размонтировании компонента. При этом важно:
– сохранить актуальное значение counter,
– не вызывать отправку на каждый ререндер или клик.
```javascript
function Component(props) {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(s => s + 1);
  };

  useEffect(() => {
    // отправка counter при unmount
    return () => {
      // analytics.send(counter)
    };
  }, []);

  if (counter % 2 === 0) {
    return <MyButton handleClick={handleClick} />;
  }

  return (
    <>
      <div>{counter}</div>
      <MyButton handleClick={handleClick} />
    </>
  );
}

```

---

## 569. Принудительный ререндер компонента

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/prinuditelnyj-rerender-komponenta

### Задача

Реализовать механизм принудительного ререндера компонента. Используется useState, где forceUpdate вызывается без логики, просто для обновления UI.
```javascript
const [counter, setCounter] = useState(0);
const analyticsCount = useRef(0);
const [token, forceUpdate] = useState(0);

const handleClick = () => {
  setCounter(s => {
    analyticsCount.current = s + 1;
    return s + 1;
  });
};

useEffect(() => {
  return () => {
    sendToAnalytics(analyticsCount.current);
  };
}, []);

```

---

## 570. Мессенджер

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 2, 'title': 'System Design', 'slug': 'system-design'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/messendzher

### Задача

Спроектировать систему мессенджера с поддержкой:
- просмотра списка контактов,
- отправки и получения сообщений от контакта,
- нотификаций о новых сообщениях,
- просмотра последних сообщений в офлайн-режиме,
- передачи изображений,
- возможности оставить сообщение в офлайн-режиме.

---

## 571. Переворот строки по символам

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/perevorot-stroki-po-simvolam

### Задача

Определите, что выведет следующий код в консоль:
```javascript
"Hello world".split("").reverse().join("");

```

---

## 572. Обмен значениями переменных через деструктуризацию

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obmen-znacheniyami-peremennyh-cherez-destrukturizaciyu

### Задача

Определите, что выведет следующий код в консоль:
```javascript
let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a, b);

```

---

## 573. Ссылочное поведение объектов в JavaScript

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ssylochnoe-povedenie-obektov-v-javascript

### Задача

Определите, что будет выведено в консоль после выполнения следующего кода:
```javascript
const a = { value: "abc" };
const b = a;

b.value = "cde";

console.log(a);

```

---

## 574. Поведение объектов, объявленных через const и let

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-obektov-obyavlennyh-cherez-const-i-let

### Задача

Определите, что будет выведено в консоль после выполнения следующего кода:
```javascript
const objConst = {
  item: "foo",
};

let objLet = {
  item: "bar",
};

objConst.item = "bar";
objLet.item = "foo";

console.log(objConst, objLet);

```

---

## 575. Асинхронное поведение Promise.race

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/asinhronnoe-povedenie-promiserace

### Задача

Определите, какой результат будет выведен в консоль после выполнения кода ниже:
```javascript
const firstPromise = new Promise((res) => setTimeout(res, 500, "1"));
const secondPromise = new Promise((res) => setTimeout(res, 100, "2"));

Promise.race([firstPromise, secondPromise]).then((result) =>
  console.log(result)
);

```

---

## 576. Преобразование формата даты

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/preobrazovanie-formata-daty

### Задача

Написать функцию reverseDate(date), которая принимает строку даты в формате dd.mm.yyyy и возвращает строку в формате yyyy.mm.dd.
```javascript
// input:  "15.01.2022"
// output: "2022.01.15"

```

---

## 577. Массив объектов из массива строк

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/massiv-obektov-iz-massiva-strok

### Задача

Преобразовать массив строк в массив объектов с полями name и id.
```javascript
// ['foo', 'bar'] → [{ name: 'foo', id: 0 }, { name: 'bar', id: 1 }]

```

---

## 578. Кнопка активна только при заполненных полях

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/knopka-aktivna-tolko-pri-zapolnennyh-polyah

### Задача

Сделать кнопку неактивной, пока оба текстовых инпута не заполнены и чекбокс не отмечен.
```javascript
function App() {
  const [] = React.useState();

  return (
    <>
      <h1>Disable button</h1>
      <input type="text" />
      <input type="text" />
      <input type="checkbox" />
      <button>submit</button>
    </>
  );
}

```

---

## 579. Поведение счётчика в разных областях видимости

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-schyotchika-v-raznyh-oblastyah-vidimosti

### Задача

Определить результат вывода console.log(counter++), учитывая область видимости переменных.
```javascript
let counter = '1';
function foo() {
  let counter = '2';
  bar();
  function bar() {
    console.log(counter++);
  }
}

function exec() {
  foo();
}

exec();

```

---

## 580. Асинхронный вывод и приоритет очередей

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/asinhronnyj-vyvod-i-prioritet-ocheredej

### Задача

Провести код-ревью: проанализировать порядок выполнения и приоритет задач (macrotask vs microtask).
```javascript
setTimeout(() => {
  console.log('timeout 0');
});

Promise.resolve()
  .then(() => {
    console.log('promise foo');
  })
  .then(() => {
    console.log('promise bar');
  });

const promise = new Promise((resolve, reject) => {
  console.log('promise baz');
  resolve(true);
});

promise.then(() => {
  console.log('promise fez');
});

console.log('initial flow');

```

---

## 581. Асинхронная реализация кастомного промиса

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/asinhronnaya-realizaciya-kastomnogo-promisa

### Задача

Провести код-ревью: проверить поведение MyPromise с отложенным resolve и цепочкой .then().
```javascript
const promise = new MyPromise((resolve, reject) => {
  setTimeout(resolve);
});

promise
  .then(() => console.log('[pm1] resolved 1'))
  .then(() => console.log('[pm1] resolved 2'))
  .catch(() => 'error happens');

```

---

## 582. Обработка ошибки в кастомном промисе

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obrabotka-oshibki-v-kastomnom-promise

### Задача

Провести код-ревью: проанализировать отложенный reject в MyPromise и корректность .catch().
```javascript
const promise2 = new MyPromise((resolve, reject) => {
  setTimeout(reject, 2);
});

promise2
  .then(() => console.log('[pm2] resolved 1'))
  .catch(() => console.log('[pm2] rejected'));

```

---

## 583. Форматирование телефонного номера из массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/formatirovanie-telefonnogo-nomera-iz-massiva

### Задача

Реализовать функцию, принимающую массив из 10 целых чисел (от 0 до 9), и возвращающую строку в формате "(XXX) XXX-XXXX".
```javascript
function createPhoneNumber(numbers) {
    // реализация
}

```

---

## 584. Сумма двух минимальных положительных чисел

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/summa-dvuh-minimalnyh-polozhitelnyh-chisel

### Задача

Создать функцию, которая принимает массив минимум из 4 положительных целых чисел и возвращает сумму двух наименьших. В массиве нет отрицательных чисел и дробей.
```javascript
function sumTwoSmallestNumbers(numbers) {
    // реализация
}

```

---

## 585. Сумма двух наименьших чисел

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/summa-dvuh-naimenshih-chisel

### Задача

Дан массив из минимум четырёх положительных целых чисел. Вернуть сумму двух наименьших.
```javascript
function func(nums) {
    return nums.sort((a, b) => a - b).slice(0, 2);
}

console.log(func([19, 5, 42, 2, 77]));

```

---

## 586. Динамическая форма на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/dinamicheskaya-forma-na-react

### Задача

Создать компонент DynamicForm, который позволяет пользователю динамически добавлять и удалять поля ввода.
```javascript
import "./styles.css";

// Требования:
// 1. Создай компонент DynamicForm, который позволяет пользователю динамически добавлять и удалять поля ввода.
// 2. В начале форма должна содержать одно текстовое поле.
// 3. Пользователь может нажать кнопку "Добавить поле", чтобы добавить новое текстовое поле.
// 4. Возле каждого поля должна быть кнопка "Удалить", позволяющая удалить конкретное поле (если оно не единственное).
// 5. При изменении любого поля, обновлённый список значений должен храниться в useState и отображаться в console.log.
// 6. Добавь кнопку "Отправить", которая выведет в консоль все введённые данные.
// 7. Используй useState и map() для рендеринга динамического списка полей.

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

```

---

## 587. Поиск первого уникального символа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-pervogo-unikalnogo-simvola

### Задача

Напиши функцию firstUniqueChar(str), которая принимает строку и возвращает первый неповторяющийся символ.
Если такого символа нет – верните null.
```javascript
console.log(firstUniqueChar("leetcode"));    // 'l'
console.log(firstUniqueChar("aabbccdde"));   // 'e'
console.log(firstUniqueChar("aabbcc"));      // null

```

---

## 588. Список пользователей

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/spisok-polzovatelej

### Задача

Реализовать таблицу с фильтром по городу. Получать данные из API https://jsonplaceholder.typicode.com/users.
```javascript
const str = "https://jsonplaceholder.typicode.com/users";

const UserTable2 = () => {
  return <div>a</div>;
};

export default UserTable2;

```

| ID | Имя                      | Email                     | Город          |
|----|--------------------------|---------------------------|----------------|
| 1  | Leanne Graham            | Sincere@april.biz         | Gwenborough    |
| 2  | Ervin Howell             | Shanna@melissa.tv         | Wisokyburgh    |
| 3  | Clementine Bauch         | Nathan@yesenia.net        | McKenziehaven  |
| 4  | Patricia Lebsack         | Julianne.OConner@kory.org | South Elvis    |
| 5  | Chelsey Dietrich         | Lucio_Hettinger@annie.ca  | Roscoeview     |
| 6  | Mrs. Dennis Schulist     | Karley_Dach@jasper.info   | South Christy  |
| 7  | Kurtis Weissnat          | Telly.Hoeger@billy.biz    | Howemouth      |
| 8  | Nicholas Runolfsdottir V | Sherwood@rosamond.me      | Aliyaview      |
| 9  | Glenna Reichert          | Chaim_McDermott@dana.io   | Bartholomebury |
| 10 | Clementina DuBuque       | Rey.Padberg@karina.biz    | Lebsackbury    |

---

## 589. Реализовать аналог bind

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizovat-analog-bind

### Задача

Реализовать собственную версию Function.prototype.bind, которая поддерживает частичное применение аргументов.
```javascript
const obj = {
  a: 1,
  say(arg1, arg2) {
    if (arg1 !== undefined && arg2 !== undefined) {
      console.log(this.a * arg1 * arg2);
    } else {
      console.log(this.a);
    }
  }
};

const fn = obj.say;
fn.bind(obj, 1)(2);

```

---

## 590. Получение всех значений из дерева

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poluchenie-vseh-znachenij-iz-dereva

### Задача

Необходимо написать функцию getTreeValues, возвращающую значения всех вершин дерева.
```javascript
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4 },
        { value: 5 },
      ],
    },
    {
      value: 3,
      children: [
        { value: 6 },
        { value: 7 },
      ],
    },
  ],
};

getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

```

---

## 591. Отображение таблицы с фильтрацией по городу

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/otobrazhenie-tablicy-s-filtraciej-po-gorodu

### Задача

Создать компонент UserTable2, который отображает таблицу пользователей.
Требования:
    - Получить данные с https://jsonplaceholder.typicode.com/users.
    - Таблица содержит колонки: ID, Имя, Email, Город.
    - Над таблицей — заголовок Список пользователей.
    - Добавить селектор "Фильтр по городу" — отображаются только пользователи выбранного города.
    - При выборе Все — отображаются все пользователи.
```javascript
const str = "https://jsonplaceholder.typicode.com/users";

const UserTable2 = () => {
  return <div></div>;
};

export default UserTable2;

```

Список пользователей

[ Фильтр по городу: Все ▼ ]

| ID | Имя                  | Email                     | Город           |
|----|----------------------|---------------------------|------------------|
| 1  | Leanne Graham        | Sincere@april.biz         | Gwenborough      |
| 2  | Ervin Howell         | Shanna@melissa.tv         | Wisokyburgh      |
| 3  | Clementine Bauch     | Nathan@yesenia.net        | McKenziehaven    |
| 4  | Patricia Lebsack     | Julianne.OConner@kory.org | South Elvis      |
| 5  | Chelsey Dietrich     | Lucio_Hettinger@annie.ca  | Roscoeview       |
| 6  | Mrs. Dennis Schulist | Karley_Dach@jasper.info   | South Christy    |
| 7  | Kurtis Weissnat      | Telly.Hoeger@billy.biz    | Howemouth        |
| 8  | Nicholas Runolfsdottir V | Sherwood@rosamond.me   | Aliyaview        |
| 9  | Glenna Reichert      | Chaim_McDermott@dana.io   | Bartholomebury   |
| 10 | Clementina DuBuque   | Rey.Padberg@karina.biz    | Lebsackbury      |

---

## 592. Обращение к свойству объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obrashenie-k-svojstvu-obekta

### Задача

Дан объект obj с числовым полем.
Нужно получить значение свойства a.
```javascript
const obj = {
  a: 1,
};

```

---

## 593. Переписать класс на функцию-конструктор

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/perepisat-klass-na-funkciyu-konstruktor

### Задача

Есть класс Test, необходимо переписать его как функцию-конструктор с методами.
```javascript
class Test {
  constructor() {
    this.a = 777;
  }

  say() {
    console.log(10);
  }
}

const res = new Test();
console.log(res);
res.say();

```

---

## 594. Счётчик с методами и задержкой вывода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/schyotchik-s-metodami-i-zaderzhkoj-vyvoda

### Задача

Напиши функцию createCounter, которая создаёт счётчик с тремя методами:
    - increment() — увеличивает значение на 1
    - decrement() — уменьшает значение на 1
    - log() — выводит текущее значение в консоль с задержкой 1 секунда
```javascript
const counter = createCounter(10);

counter.increment();
counter.increment();
counter.decrement();

counter.log(); // Через 1 секунду в консоли: 10 + 1 + 1 - 1 = 11

```

---

## 595. Поведение this при потере контекста

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-this-pri-potere-konteksta

### Задача

Что выведется в консоль при вызове fn()?
```javascript
const obj = {
  a: 1,
  show(num) {
    if (num !== undefined) {
      console.log(this.a + num);
      return;
    }
    console.log(this.a);
  },
};

const fn = obj.show;
fn();

```

---

## 596. Как вернуть контекст при потере this

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kak-vernut-kontekst-pri-potere-this

### Задача

Связать метод объекта с его контекстом при передаче и вызове через переменную.
```javascript
const obj = {
  a: 1,
  show(num) {
    if (num !== undefined) {
      console.log(this.a + num);
      return;
    }
    console.log(this.a);
  },
};

const fn = obj.show;
fn();

```

---

## 597. Реализация собственного аналога bind

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-sobstvennogo-analoga-bind

### Задача

Реализовать функцию myBind(fn, context), которая возвращает новую функцию, вызывающую fn с переданным контекстом и аргументами.
```javascript
const obj = {
  a: 1,
  show(num) {
    if (num !== undefined) {
      console.log(this.a + num);
      return;
    }
    console.log(this.a);
  },
};

const fn = obj.show.bind(obj);
fn();

myBind(fn, obj)();

```

---

## 598. Цепочка вызовов .plus() и .minus() для числа

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/cepochka-vyzovov-plus-i-minus-dlya-chisla

### Задача

Реализовать возможность вызывать у числа методы .plus(number) и .minus(number) с поддержкой цепочек вызовов:
```javascript
(10).plus(10).minus(5); // 15

```

---

## 599. Стилизованный чекбокс с переключением состояния

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/stilizovannyj-chekboks-s-pereklyucheniem-sostoyaniya

### Задача

Сверстать компонент чекбокса в React, который визуально переключается между состояниями «включено» и «выключено». Использовать стили из комментариев:
```javascript
// Цвета: white, #4caf50, #ccc
// border-radius: 34px
// Круг: width: 26px; height: 26px;
// Переключатель: width: 60px; height: 34px;

```

---

## 600. Поведение переменных var и let при hoisting

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-peremennyh-var-i-let-pri-hoisting

### Задача

Что выведется в консоль при выполнении данного кода:
```javascript
console.log(a);
var a = 10;

console.log(b);
let b = 20;

```

---

## 601. Реализация функции debounce

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-funkcii-debounce

### Задача

Реализовать функцию debounce, которая ограничивает количество вызовов переданной функции, откладывая её выполнение на указанный интервал (в миллисекундах). В примере console.log('API call') должен выполниться не чаще, чем раз в 300 мс после последнего вызова.
```javascript
const onInput = debounce(() => console.log('API call'), 300);

onInput();

```

---

## 602. Реализация debounce с устранением проблемы

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-debounce-s-ustraneniem-problemy

### Задача

Реализовать функцию debounce, чтобы при многократных вызовах не происходил повторный запуск до истечения таймера.
```javascript
const debounce = (callback, timeout) => setTimeout(() => {
  callback();
}, timeout);

```

---

## 603. Обработка отложенного вызова через debounce

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obrabotka-otlozhennogo-vyzova-cherez-debounce

### Задача

Реализовать функцию debounce, возвращающую новую функцию. Эта функция должна вызывать callback только после того, как прошло timeout миллисекунд с момента последнего вызова.
```javascript
const debounce = (callback, timeout) => {
  // реализация
};

const onInput = debounce(() => console.log('API call'), 6000);
onInput();

```

---

## 604. Форма с вводом и удалением пользователя

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/forma-s-vvodom-i-udaleniem-polzovatelya

### Задача

Реализовать форму, содержащую поля ввода: имя, возраст, email, роль (выпадающий список) и пароль. Предусмотреть кнопку для удаления записи.
```javascript
<input placeholder="Имя" />
<input placeholder="Возраст" />
<input placeholder="Email" />
<select>
  <option>Пользователь</option>
  <option>Админ</option>
</select>
<input placeholder="Пароль" />
<button>✕</button>

```

---

## 605. Замыкание без вложенности

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zamykanie-bez-vlozhennosti

### Задача

Написать пример замыкания, не используя вложенную функцию.

---

## 606. Контекст выполнения возвращаемой функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-vypolneniya-vozvrashaemoj-funkcii

### Задача

Что выведется в консоль при выполнении следующего кода?
```javascript
const obj = {
    a: 1,
    say() {
        return function() {
            console.log(this.a);
        }
    }
}

obj.say()();

```

---

## 607. Контекст метода внутри объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-metoda-vnutri-obekta

### Задача

Исправить код так, чтобы в консоль выводилось значение 1 из объекта obj.
```javascript
const obj = {
    a: 1,
    say() {
        return () => {
            console.log(this.a);
        }
    }
}

obj.say()();

```

---

## 608. Дебаунс вызова после серии событий

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/debauns-vyzova-posle-serii-sobytij

### Задача

Реализовать функцию debounce, чтобы console.log('API call') происходил один раз — только после последнего вызова onInput() с задержкой в 3 секунды.
```javascript
const onInput = debounce(() => console.log('API call'), 3000);

onInput();
onInput();
onInput();
onInput();

```

---

## 609. Бинарный поиск в отсортированном массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/binarnyj-poisk-v-otsortirovannom-massive

### Задача

Дана отсортированная последовательность чисел.
Найти позицию элемента в массиве:
если элемент существует — вернуть его индекс,
если не существует — вернуть -1.
```javascript
const arr1 = [-1, 0, 3, 5, 9, 12];
console.log(binarySearch(arr1, 9)); // 4

```

---

## 610. Замыкание без вложенной функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zamykanie-bez-vlozhennoj-funkcii

### Задача

Реализовать замыкание, не используя вложенную функцию при определении.
```javascript
// TODO: реализовать замыкание без прямого вложения функции в функцию

```

---

## 611. Функция sleep с поддержкой async/await

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funkciya-sleep-s-podderzhkoj-asyncawait

### Задача

Реализовать функцию sleep, которая приостанавливает выполнение на заданное количество миллисекунд.
```javascript
(async () => {
    await sleep(500);
    console.log(777);
})();

```

---

## 612. Каррирование функции с переменным числом вызовов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/karrirovanie-funkcii-s-peremennym-chislom-vyzovov

### Задача

Реализовать функцию curry, которая позволяет вызывать исходную функцию по частям — с аргументами, передаваемыми через цепочку вызовов.
```javascript
function sum(a, b, c, d) {
    return a + b + c + d;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)(4));       // 10
console.log(curriedSum(1, 2)(3)(4));       // 10
console.log(curriedSum(1)(2, 3, 4));       // 10

```

---

## 613. Переопределение метода фильтрации массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/pereopredelenie-metoda-filtracii-massiva

### Задача

Реализовать метод myFilter, аналогичный встроенному Array.prototype.filter, который возвращает новый массив, включающий элементы, удовлетворяющие условию.
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const res = arr.myFilter((item) => item % 2);

```

---

## 614. Кастомный хук управления массивом

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kastomnyj-huk-upravleniya-massivom

### Задача

Реализовать кастомный хук useArray, который обеспечивает добавление и удаление элементов массива. Использование приведено ниже.
```javascript
import { useArray } from "./hooks/useArray";
import "./styles.css";

export default function App() {
  const { value, push, removeByIndex } = useArray<number>([1, 2, 3]);

  return (
    <div>
      <ul>
        {value.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeByIndex(index)}>Удалить</button>
          </li>
        ))}
      </ul>
      <button onClick={() => push(value.length + 1)}>Добавить</button>
    </div>
  );
}

```

---

## 615. Создание объекта через функцию-конструктор

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sozdanie-obekta-cherez-funkciyu-konstruktor

### Задача

Что произойдёт при выполнении следующего кода?
```javascript
function Test() {
}

const obj = new Test();

```

---

## 616. Поведение конструктора без аргументов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-konstruktora-bez-argumentov

### Задача

Что произойдёт при создании объекта без передачи аргументов, если в функции-конструкторе используется параметр?
```javascript
function Test(a) {
    this.a = a;
}

const obj = new Test();

```

---

## 617. Замыкание с доступом к приватной переменной

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zamykanie-s-dostupom-k-privatnoj-peremennoj

### Задача

Написать пример замыкания, в котором внутренняя функция имеет доступ к переменной внешней функции.
```javascript
// TODO: реализовать замыкание

```

---

## 618. Вложенные функции и потеря контекста

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vlozhennye-funkcii-i-poterya-konteksta

### Задача

Что выведется в консоль при выполнении следующего кода?
```javascript
const obj = {
    a: 1,
    say() {
        return function() {
            return function() {
                console.log(this.a);
            }
        }
    }
}

obj.say()()();

```

---

## 619. Самописный аналог метода filter

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/samopisnyj-analog-metoda-filter

### Задача

Реализовать метод myFilter, аналогичный Array.prototype.filter, чтобы результат res2 соответствовал res.
```javascript
const arr = [1, 2, 3, 4, 5, 6];

const res = arr.filter(item => item % 2);

const res2 = arr.myFilter(item => item % 2);

console.log(res);
// console.log(res2)

```

---

## 620. Фильтрация задач по отдельным словам

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/filtraciya-zadach-po-otdelnym-slovam

### Задача

Написать функцию filterTasks, которая возвращает список задач, содержащих заданное слово как отдельную часть, а не внутри других слов.
```javascript
const tasks = [
  "Купить чай",
  "Купить чайник",
  "Позвонить бабушке",
  "Сделать чай с лимоном",
  "Выучить JavaScript"
];

filterTasks(tasks, "чай");   // ["Купить чай", "Сделать чай с лимоном"]
filterTasks(tasks, "java");  // ["Выучить JavaScript"]
filterTasks(tasks, "ник");   // ["Купить чайник"]

```

---

## 621. Форматирование ввода номера телефона

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/formatirovanie-vvoda-nomera-telefona

### Задача

Сделать компонент PhoneNumberInput, который при вводе форматирует текст в поле в виде телефонного номера (например, +7 (___) ___--).
```javascript
import "./styles.css";
import { PhoneNumberInput } from "./Input";

export default function App() {
  return (
    <div className="App">
      <div>Input</div>
      <PhoneNumberInput />
      <br />
      <br />
      <div>Your Input</div>
    </div>
  );
}

```

---

## 622. Типобезопасное извлечение поля из массива объектов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipobezopasnoe-izvlechenie-polya-iz-massiva-obektov

### Задача

Реализовать функцию pluck, которая:
– принимает массив объектов и ключ свойства,
– возвращает массив значений этого свойства,
– строго типизирована: ключ должен существовать в объекте, и возвращаемый тип должен соответствовать типу значений этого свойства.
```javascript
function pluck() {}

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

const names = pluck(people, "name"); // Должно быть string[] = ['Alice', 'Bob']
const ages = pluck(people, "age");   // Должно быть number[] = [30, 25]

```

---

## 623. Поиск значения по вложенному пути в объекте

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-znacheniya-po-vlozhennomu-puti-v-obekte

### Задача

Дан вложенный объект.
Необходимо создать метод-прототип hash, который возвращает значение по вложенному пути в виде строки или undefined, если путь некорректен.
```javascript
const obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

obj.hash("person.name"); // 'joe'
obj.hash("person.history.bio"); // { funFact: 'I like fishing.' }
obj.hash("person.history.homeStreet"); // undefined
obj.hash("person.animal.pet.needNoseAntEater"); // undefined

```

---

## 624. Таймер с обратным отсчётом и кнопкой сброса

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tajmer-s-obratnym-otschyotom-i-knopkoj-sbrosa

### Задача

Реализовать компонент Timer, который:
– принимает initialTime (в миллисекундах),
– запускает обратный отсчёт до нуля,
– не уходит в отрицательные значения,
– отображает оставшееся время,
– содержит кнопку Reset, сбрасывающую таймер к начальному значению.
```javascript
import "./styles.css";
import Timer from "./Timer";

export default function App() {
  return (
    <div className="App">
      <Timer initialTime={5000} />
    </div>
  );
}

```

---

## 625. Потеря контекста при передаче метода в переменную

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poterya-konteksta-pri-peredache-metoda-v-peremennuyu

### Задача

Исправить код так, чтобы при вызове fn() сохранялся доступ к объекту obj и в консоль выводилось значение 1.
```javascript
const obj = {
  a: 1,
  say() {
    console.log(this.a);
  }
};

const fn = obj.say;
fn();

```

---

## 626. Реализация аналога оператора new

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-analoga-operatora-new

### Задача

Реализовать функцию Foo, которая принимает функцию-конструктор (Book) и аргументы,
создаёт новый объект с прототипом конструктора, вызывает функцию с привязкой this и возвращает результат.
Результат должен быть экземпляром переданного конструктора.
```javascript
function Book(name, author) {
  this.name = name;
  this.author = author;
}

function Foo(Book, 'Учебник javascript', 'Петр Сергеев') {}

const myBook = Foo(Book, 'Учебник JavaScript', 'Петр Сергеев');

console.log(myBook); // { name: 'Учебник JavaScript', author: 'Петр Сергеев' }
console.log(myBook instanceof Book); // true

```

---

## 627. Контекст в обычной и стрелочной функции внутри setTimeout

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-v-obychnoj-i-strelochnoj-funkcii-vnutri-settimeout

### Задача

Что выведется в консоль при выполнении следующего кода?
```javascript
(() => {
  const obj = {
    name: "EPAM",
    getName() {
      return this.name;
    },
    delayedGetName1() {
      setTimeout(function () {
        console.log("1:", this.getName());
      }, 1000);
    },
    delayedGetName2() {
      setTimeout(() => {
        console.log("2:", this.getName());
      }, 1000);
    }
  };

  obj.delayedGetName1();
  obj.delayedGetName2();
})();

```

---

## 628. Корректировка контекста внутри setTimeout

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/korrektirovka-konteksta-vnutri-settimeout

### Задача

Исправить метод delayedGetName1, чтобы this.getName() корректно вызывался и возвращал "EPAM".
```javascript
(() => {
  const obj = {
    name: "EPAM",
    getName() {
      return this.name;
    },
    delayedGetName1() {
      setTimeout(function () {
        console.log("1:", this.getName());
      }, 1000);
    },
    delayedGetName2() {
      setTimeout(() => {
        console.log("2:", this.getName());
      }, 1000);
    }
  };

  obj.delayedGetName1();
  obj.delayedGetName2();
})();

```

---

## 629. Порядок выполнения setTimeout и Promise

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vypolneniya-settimeout-i-promise

### Задача

Объяснить порядок вывода сообщений в консоли при одновременном использовании setTimeout и промисов с разной задержкой.
```javascript
(() => {
  const myPromise = (delay) => new Promise((res, rej) => {
    setTimeout(res, delay);
  });

  setTimeout(() => console.log("in setTimeout1"), 1000);
  myPromise(1000).then(res => console.log("in Promise 1"));

  setTimeout(() => console.log("in setTimeout2"), 100);

  myPromise(2000).then(res => console.log("in Promise 2"));

  setTimeout(() => console.log("in setTimeout3"), 2000);
  myPromise(1000).then(res => console.log("in Promise 3"));

  setTimeout(() => console.log("in setTimeout4"), 1000);
  myPromise(5000).then(res => console.log("in Promise"));
})();

```

---

## 630. Поведение try/catch внутри Promise

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-trycatch-vnutri-promise

### Задача

Объяснить, почему исключение, выброшенное внутри Promise, не перехватывается внешним try/catch.
```javascript
try {
  new Promise((doRes, doRej) => {
    throw "asda";
  });
} catch (e) {
  console.log("Error", e);
}

```

---

## 631. Поведение стандартных методов массива и объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-standartnyh-metodov-massiva-i-obekta

### Задача

Заполнить ? соответствующими значениями или функциями и определить, что вернётся в каждом случае:
```javascript
[1, 2, 3].map(?)          // ?
[1, 2, 3].filter(?)       // ?
[1, 2, 3].some(?)         // ?
[1, 2, 3].every(?)        // ?
[1, 2, 3].includes(?)     // ?

[1, 2, 3].unshift(?)      // ?
[1, 2, 3].slice(?)        // ?
[1, 2, 3].splice(?)       // ?

Object.create(?)          // ?
Object.assign(?)          // ?
Object.prototype.hasOwnProperty(?)  // ?

```

---

## 632. Преобразование типов в JavaScript

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/preobrazovanie-tipov-v-javascript

### Задача

Определить результат выражений с учётом логических и строковых преобразований.
```javascript
console.log(!"true" == !"0"); // ?
console.log("" + null);       // ?

```

---

## 633. Реализовать замыкание

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizovat-zamykanie

### Задача

Создать функцию с замыканием, которая сохраняет доступ к переменной из внешней области видимости и позволяет получить её значение позднее.
```javascript
// TODO: реализовать замыкание, аналогично generator или другим функциям выше

```

---

## 634. Влияние типа функции на контекст this

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vliyanie-tipa-funkcii-na-kontekst-this

### Задача

Что выведется в консоль при вызове методов bar() и baz()?
```javascript
function foo() {
  const value = 1;

  return {
    value: 2,
    bar: () => {
      console.log(this.value);
    },
    baz: function () {
      console.log(this.value);
    }
  };
}

const obj = foo();

obj.bar(); // ?
obj.baz(); // ?

```

---

## 635. Замыкание в цикле с var

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/zamykanie-v-cikle-s-var

### Задача

Что будет результатом выполнения кода ниже, учитывая особенности замыкания и область видимости var?
```javascript
var i = 10;
var array = [];

while (i--) {
  array.push(function () {
    return i + 1;
  });
}

console.log({
  0: array[0](),
  1: array[1]()
});

```

---

## 636. Порядок вывода console.log при смешанном стеке

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vyvoda-consolelog-pri-smeshannom-steke

### Задача

Определить порядок вывода сообщений в консоль с учётом приоритетов:
синхронный код → микротаски (промисы) → макротаски (setTimeout).
```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

```

---

## 637. Проверка числа на палиндром

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/proverka-chisla-na-palindrom

### Задача

Реализовать функцию isPalindrome, которая возвращает true, если переданное число читается одинаково слева направо и справа налево.
Отрицательные числа не считаются палиндромами.
```javascript
function isPalindrome(number) {
  return;
}

console.log(isPalindrome(1234321));  // true
console.log(isPalindrome(-23432));   // false

```

---

## 638. Сортировка нечётных чисел в массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/sortirovka-nechyotnyh-chisel-v-massive

### Задача

Реализовать функцию sortOdd, которая сортирует только нечётные числа в массиве по возрастанию,
при этом чётные числа остаются на своих местах.
```javascript
function sortOdd(array) {
  return;
}

console.log(sortOdd([7, 1]));                    // [1, 7]
console.log(sortOdd([5, 8, 6, 3, 4, 41]));       // [3, 8, 6, 5, 4, 41]
console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

```

---

## 639. Мемоизация, побочные эффекты и обработка событий

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/memoizaciya-pobochnye-effekty-i-obrabotka-sobytij

### Задача

Провести код-ревью следующего React-приложения:
```javascript
const App = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState<string>();
  const [clientWidth, setClientWidth] = useState<number>();

  useEffect(async () => {
    setDate(await fetchDate());

    window.addEventListener("resize", () => {
      setClientWidth(document.body.clientWidth);
    });
  }, []);

  return (
    <div className="App">
      <div key="title">Server date: {date}</div>
      <div key="width">Client width: {clientWidth}px</div>
      <Counter
        value={count}
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
};

function Counter(props: any) {
  console.log("COUNTER rendered");

  const memoizedOnClick = useCallback(() => {
    props.onClick();
  }, []);

  return (
    <div>
      <button onClick={memoizedOnClick}>+&nbsp;</button>
      {props.value || 0}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

---

## 640. Приложение на React: дата, ширина окна, счётчик

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/prilozhenie-na-react-data-shirina-okna-schyotchik

### Задача

Реализовать приложение на React, которое:
    - Запрашивает текущую дату с сервера с помощью метода fetchDate из api.ts и отображает её.
    - Следит за изменением размера экрана и выводит текущую ширину окна.
    - Содержит компонент-счётчик: кнопка увеличивает значение, рядом отображается текущий счётчик.
    - Всё должно корректно работать на мобильных устройствах.
    - Все компоненты должны отображаться по центру экрана.

---

## 641. Разработка страницы бронирования отеля

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 2, 'title': 'System Design', 'slug': 'system-design'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/razrabotka-stranicy-bronirovaniya-otelya

### Задача

Представь, что страница бронирования, как на скрине, ещё не реализована. Необходимо:
– Определить, какие компоненты нужно будет создать на фронтенде.
– Сформулировать, какие контракты (эндпоинты, поля, форматы) нужно обсудить с бэкендом.
– Продумать, какие данные будут запрашиваться, какие — отправляться.
– Учесть взаимодействие с кнопкой оплаты, скидками, промокодами, бонусами и формами гостей.
– Принять во внимание адаптивность и UX (валидация, состояния загрузки, ошибки).
– Обозначить подход к запуску разработки, если API ещё нет (моки, заглушки и т.д.).

---

## 642. Порядок вывода в консоль при использовании промисов и setTimeout

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vyvoda-v-konsol-pri-ispolzovanii-promisov-i-settimeout

### Задача

Определить, что будет выведено в консоль и в каком порядке при выполнении следующего кода:
```javascript
function test() {
  const p = new Promise((resolve) => {
    console.warn('1');
    setTimeout(() => console.warn('2'));
    resolve('');
  });

  p.then(() => {
    console.warn('3');
    setTimeout(() => console.warn('4'));
  });

  console.warn('5');
}

test();

```

---

## 643. Полифилл для Promise.all

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/polifill-dlya-promiseall

### Задача

Реализовать функцию promiseAll, которая работает аналогично Promise.all.
```javascript
function promiseAll(promises: Promise<any>[]): Promise<any[]> {
  // ваш код тут
}

```

---

## 644. Поиск циклических зависимостей

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poisk-ciklicheskih-zavisimostej

### Задача

Реализовать функцию hasCircularDependency, которая определяет, есть ли цикл в графе зависимостей между файлами.
```javascript
type Resource = string;
type Vector = Record<Resource, Resource[]>;

function hasCircularDependency(entrypoint: Resource, deps: Vector): boolean {
  // ваш код тут
}

// пример
console.warn(hasCircularDependency('index.js', {
  'index.js': ['foo.js', 'bar.js'],
  'bar.js': ['baz.js'],
  'foo.js': ['baz.js'],
  'baz.js': ['x.js'],
  'x.js': ['foo.js'] // цикл: index → foo → baz → x → foo
})); // true

```

---

## 645. Обработка ввода с контролем асинхронных запросов

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obrabotka-vvoda-s-kontrolem-asinhronnyh-zaprosov

### Задача

Реализовать приложение на React, которое:
– Содержит текстовое поле ввода
– При каждом изменении поля формирует запрос на сервер
– Отображает результат запроса ниже поля

Особые требования:
    Отображать признак выполнения запроса
    Не отправлять запрос, если поле ввода пустое
    Обрабатывать ситуацию, когда ответы приходят в разном порядке — отображать результат только самого последнего запроса
```javascript
import React from 'react';

export const App = () => {
  return <div/>;
};

```

---

## 646. Вызов метода, добавленного в String.prototype

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyzov-metoda-dobavlennogo-v-stringprototype

### Задача

Что будет результатом выполнения следующего кода?
```javascript
String.prototype.givePizza = () => 'Just give pizza';

const name = 'Mau';

name.givePizza();

```

---

## 647. Изменение метода прототипа строки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/izmenenie-metoda-prototipa-stroki

### Задача

Изменить код так, чтобы метод givePizza возвращал строку в формате:
<значение строки>, just give pizza!
```javascript
String.prototype.givePizza = () => 'Just give pizza';
const name = 'Mau';
name.givePizza(); // Mau, just give pizza!

```

---

## 648. Контекст вызова методов объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-vyzova-metodov-obekta

### Задача

Что вернётся при выполнении следующих вызовов?
```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter();
shape.perimeter();

```

---

## 649. Контекст в обычной функции и стрелочной

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-v-obychnoj-funkcii-i-strelochnoj

### Задача

Что вернётся при выполнении следующих вызовов?
```javascript
function diameter() {
  return this.radius * 2;
}

const shape = {
  radius: 10,
  diameter,
  perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter();  // ?
shape.perimeter(); // ?

```

---

## 650. Потеря контекста при передаче метода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poterya-konteksta-pri-peredache-metoda

### Задача

Что будет результатом выполнения следующих вызовов?
```javascript
function diameter() {
  return this.radius * 2;
}

const shape = {
  radius: 10,
  diameter,
  perimeter: () => 2 * Math.PI * this.radius,
};

const foo = shape.diameter;
foo();              // ?
shape.diameter();   // ?
shape.perimeter();  // ?

```

---

## 651. Контекст внутри метода объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-vnutri-metoda-obekta

### Задача

Определить, что выведется в консоль при раскомментировании строки console.log(...):
```javascript
const user = {
  name: "Bob",
  roles: ["friend", "brother", "student"],
  getRoles: function () {
    return this.roles.map(function (role) {
      return this.name + " is " + role;
    });
  }
};
// console.log(user.getRoles()); // ?
```

---

## 652. Потеря контекста при передаче метода объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poterya-konteksta-pri-peredache-metoda-obekta

### Задача

Что выведется в консоль при вызове fun() после извлечения метода getRoles?
```javascript
const user = {
  name: "Bob",
  roles: ["friend", "brother", "student"],
  getRoles: function () {
    return this.roles.map((role) => {
      return this.name + " is " + role;
    });
  }
};

const fun = user.getRoles;

```

---

## 653. Ссылочный тип и присваивание null

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ssylochnyj-tip-i-prisvaivanie-null

### Задача

Что будет выведено в консоль при раскомментировании console.log(b)?
```javascript
const a = {
  a: 'jsdf',
  b: 4
};

const b = [a];

a = null;

```

---

## 654. Очистка объекта от null и undefined

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/ochistka-obekta-ot-null-i-undefined

### Задача

Реализовать функцию-утилиту, которая очищает входной объект от полей со значениями null и undefined.
– Входной объект может содержать поля любого типа
– Важно типизировать входные и выходные данные
```javascript
Пример:
// вход
{
  a: 'test',
  b: 23,
  c: null,
  d: undefined
}

// выход
{
  a: 'test',
  b: 23
}

```

---

## 655. Компонент ReviewMe на React

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/komponent-reviewme-na-react

### Задача

Сформулировать вывод о поведении и корректности работы компонента. Определить, что делает код, какие могут быть потенциальные проблемы. Проверить, работает ли логика добавления задач с клавиши Enter и при клике по кнопке.
```javascript
import React from "react";

const ReviewMe = () => {
  const [taskText, setTaskText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [taskCount, setTaskCount] = React.useState(1);

  React.useLayoutEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        addTask(taskText);
      }
    });
  }, []);

  const addTask = React.useCallback((text) => {
    const newTask = { id: taskCount, text: text };
    setTasks([...tasks, newTask]);
    setTaskCount(taskCount + 1);
    setTaskText('');
  });

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={() => addTask(taskText)}>Add Task</button>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.text}</div>
        ))}
      </div>
      <p>Total Tasks: {taskCount}</p>
    </div>
  );
};

export default ReviewMe;

```

---

## 656. Хук для получения данных по URL

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/huk-dlya-polucheniya-dannyh-po-url

### Задача

Реализовать собственный React-хук useFetch, который принимает на вход строку с URL, выполняет HTTP-запрос по этому адресу, сохраняет полученные данные и возвращает их. Все результаты запросов должны накапливаться в массиве, хук должен возвращать этот массив данных.
```javascript
import { useEffect, useState } from "react";

export default function App() {
  const counter = 0;
  const [data, setData] = useState("");
  const [joke] = useFetch("https://api.chucknorris.io/jokes/random");

  useEffect(() => {
    console.log("was", joke);
    setData(joke?.value);
  }, [joke]);

  return (
    <div className="App">
      <h1>Открой консоль {data}</h1>
    </div>
  );
}

```

---

## 657. Реализация тестового приложения

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-testovogo-prilozheniya

### Задача

Реализовать приложение-тест, в котором:
    Пользователь видит текст вопроса и может выбрать один из предложенных вариантов ответа.
    После нажатия на кнопку "Далее" отображается следующий вопрос.
    После окончания всех вопросов выводится сообщение:
    "Вы ответили верно на N вопросов из N" и отображается кнопка "Начать заново".
```javascript
function App() {
  const mock = [
    {
      question: "Сколько человек на Земле?",
      answer: 3,
      variants: [
        { name: "6 миллиардов", value: 1 },
        { name: "7 миллиардов", value: 2 },
        { name: "8 миллиардов", value: 3 },
      ],
    },
    {
      question: "Сколько частей света?",
      answer: 2,
      variants: [
        { name: "5", value: 1 },
        { name: "6", value: 2 },
        { name: "7", value: 3 },
      ],
    },
    {
      question: "Сколько океанов на Земле?",
      answer: 1,
      variants: [
        { name: "5", value: 1 },
        { name: "6", value: 2 },
        { name: "7", value: 3 },
      ],
    },
  ];
}

```

---

## 658. Строка по типам и текстовый поиск

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/stroka-po-tipam-i-tekstovyj-poisk

### Задача

Реализовать:
    Вывод строки названий объектов
    Написать функцию, которая возвращает строку с названиями объектов (через запятую), у которых object_type соответствует типам с class === "Устройства".
```javascript
interface IObjectItem {
    id: number;
    name: string;
    object_type: number;
}

interface IObjectType {
    id: number;
    class: string;
}

const objects: IObjectItem[] = [
    { id: 1, name: "Test 1", object_type: 1 },
    { id: 2, name: "Test 2", object_type: 1 },
    { id: 3, name: "Test 3", object_type: 2 },
    { id: 4, name: "Test 4", object_type: 3 },
    { id: 5, name: "Test 5", object_type: 4 },
];

const object_types: IObjectType[] = [
    { id: 1, class: "Устройства" },
    { id: 2, class: "Устройства" },
    { id: 3, class: "Порты" },
    { id: 4, class: "Кабели" },
];

function getNames(objects: IObjectItem[], object_types: IObjectType[]): string {
    const mapIds: number[] = [];

    object_types.forEach((type) => {
        if (type.class === "Устройства") mapIds.push(type.id);
    });

    const result: string[] = [];

    objects.forEach((obj) => {
        if (mapIds.includes(obj.object_type)) result.push(obj.name);
    });

    return result.join(", ");
}

console.log(getNames(objects, object_types));

```

---

## 659. Отложенный вызов (debounce)

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/otlozhennyj-vyzov-debounce

### Задача

Реализовать текстовый поиск с участием бэкенда (только эмуляция).
Требования:
- Реагировать на каждую набранную букву, но вызывать callApi только если пауза в наборе составила 1 секунду.
- Использовать только голый JavaScript, без готовых библиотек.
- HTML-форму реализовывать не надо — только реакция на условный onChange(value).
- React окружение не использовать.
```javascript
/*
  const callApi = (value: string) => console.log(value)
*/

```

---

## 660. Получить объект с отчётом по регионам

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poluchit-obekt-s-otchyotom-po-regionam

### Задача

Реализовать функцию, которая принимает массив объектов с полями name и region, и возвращает объект, где ключ — это номер региона, а значение — количество субъектов в этом регионе.
Дополнительные переменные и массивы не использовать.
Нужен return из функции getResult.
```javascript
interface ISubjectRegion {
  name: string;
  region: number;
}

interface IResult {
  [key: ISubjectRegion['region']]: number;
}

const sourceData: ISubjectRegion[] = [
  { name: "Субъект 1", region: 1 },
  { name: "Субъект 2", region: 2 },
  { name: "Субъект 3", region: 2 },
  { name: "Субъект 4", region: 2 },
  { name: "Субъект 5", region: 4 },
];

// результат:
// {
//   1: 1, // 1 субъект в регионе 1
//   2: 3, // 3 субъекта в регионе 2
// }

function getResult(data: ISubjectRegion[]): IResult {
  // реализовать здесь
}

```

---

## 661. Типизация методов объектов по ключам

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/tipizaciya-metodov-obektov-po-klyucham

### Задача

Реализовать корректную типизацию двух объектов (vtemplateObject и reportObject), чтобы сохранить строгую типизацию значений за каждым ключом. Типизация key: string и Record<string, ...> — не подходят, т.к. теряют информацию о конкретных ключах.

Требования:
1. Для vtemplateObject задать точные ключи getVtemplates, postVtemplates.
2. Для reportObject задать точные ключи getReports, putReports.
3. На этапе типизации каждый ключ должен быть известен.
```javascript
// примерные объекты:
const vtemplateObject = {
  getVtemplates: () => {/* ... */},
  postVtemplates: () => {/* ... */}
}

const reportObject = {
  getReports: () => {/* ... */},
  putReports: () => {/* ... */}
}

// типизация должна сохранять ключи и их значения

```

---

## 662. Порядок вывода в консоль

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vyvoda-v-konsol_4

### Задача

Определить, в каком порядке будут выведены значения в консоль при выполнении следующего кода:
```javascript
const promise = new Promise((res) => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    res();
  }, 0);
});

console.log(3);

promise.then(() => {
  console.log(4);
});

```

---

## 663. Вызов компонента двумя способами

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyzov-komponenta-dvumya-sposobami

### Задача

Проверить, есть ли разница между использованием Widget() и <Widget /> внутри JSX.
```javascript
<div>
  {Widget()}
</div>
<div>
  <Widget />
</div>

```

---

## 664. Порядок вывода логов с асинхронными операциями

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vyvoda-logov-s-asinhronnymi-operaciyami

### Задача

Определить порядок сообщений, выводимых в консоль при выполнении скрипта с setTimeout, Promise и requestAnimationFrame.
```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

new Promise((resolve, _) => {
  console.log('async request');
  resolve();
})
  .then(() => {
    console.log('Promise 1');
  })
  .then(() => {
    console.log('Promise 2');
  });

requestAnimationFrame(() => {
  console.log('requestAnimationFrame 1');
});

requestAnimationFrame(() => {
  console.log('requestAnimationFrame 2');
});

console.log('End');

```

---

## 665. Обновление текста по таймеру

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obnovlenie-teksta-po-tajmeru

### Задача

Реализовать функцию, которая обновляет текст HTML-элемента, меняя его на следующий элемент из массива:
- обновление происходит каждые 2 секунды,
- обновление прекращается через 10 секунд.
```javascript
/**
 * Требуется написать функцию, которая обновляет
 * текст элемента следующим элементом массива
 * каждые 2 секунды, и останавливается через 10 секунд
 */
function updateTextEveryTwoSeconds(elementId, texts) {
}

// Пример использования
updateTextEveryTwoSeconds("content", [
  "Hello world 1",
  "Hello world 2",
  "Hello world 3",
  "Hello world 4",
  "Hello world 5",
]);

```

---

## 666. Поведение useRef с классом

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-useref-s-klassom

### Задача

Разобраться, сколько раз сработает console.log в конструкторе класса MyClass, если его экземпляр создаётся в useRef, а компонент перерисовывается по нажатию на кнопку.
```javascript
import { useRef, useState } from "react";

class MyClass {
  constructor(value: number) {
    console.log(value);
  }
}

export default function MyComponent() {
  const myClassRef = useRef(new MyClass(new Date().getTime()));
  const [, updateState] = useState<Symbol>(Symbol());

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={() => updateState(Symbol())}>
        update state
      </button>
    </div>
  );
}

```

---

## 667. UseRef и сохранение экземпляра класса

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/useref-i-sohranenie-ekzemplyara-klassa

### Задача

Проверить, как useRef сохраняет экземпляр класса между рендерами, и будет ли меняться creationTime при повторных отрисовках. Выводится console.log конструктора и console.log поля creationTime.
```javascript
import { useRef, useState } from "react";

class MyClass {
  public creationTime;
  constructor(value: number) {
    this.creationTime = value;
    console.log(value);
  }
}

export default function MyComponent() {
  const myClassRef = useRef(new MyClass(new Date().getTime()));
  const [, updateState] = useState<Symbol>(Symbol());

  console.log(myClassRef.current.creationTime);

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={() => updateState(Symbol())}>
        update state
      </button>
    </div>
  );
}

```

---

## 668. Удаление элементов, присутствующих в другом массиве

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/udalenie-elementov-prisutstvuyushih-v-drugom-massive

### Задача

Написать функцию, которая сравнивает два массива и удаляет из первого все значения, присутствующие во втором. Порядок элементов сохраняется.
```javascript
// Примеры:
console.log(function([0, 2, 2, 2, 4], [2]));        // [0, 4]
console.log(function([1, 2, 2], [1]));              // [2, 2]
console.log(function([0, 2, 3], [1, 2]));           // [0, 3]

```

---

## 669. Проверка последовательности символов в строке

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/proverka-posledovatelnosti-simvolov-v-stroke

### Задача

Написать функцию, которая проверяет, содержатся ли символы из одной строки в другой в том же порядке (не обязательно подряд).
```javascript
function needleInHaystack(needle, haystack) {
  return false;
}

// Примеры:
needleInHaystack('whe', 'cartwheel')  // true
needleInHaystack('crt', 'cartwheel')  // true
needleInHaystack('ctr', 'cartwheel')  // false
needleInHaystack('weee', 'cartwheel') // false

```

---

## 670. Объединение чисел в диапазоны

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 3, 'title': 'Алгоритмы', 'slug': 'algoritmy'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obedinenie-chisel-v-diapazony

### Задача

Дан массив целых чисел. Необходимо преобразовать его в строку, объединив последовательные числа в диапазоны вида "a-b", а одиночные числа оставить как есть.
Результат должен быть строкой с перечислением диапазонов и чисел через запятую.
```javascript
// Вход: [1, 4, 5, 2, 3, 9, 8, 11, 0]
// Выход: "0-5,8-9,11"
// (Числа 0, 1, 2, 3, 4, 5 образуют диапазон 0–5, 8 и 9 — 8–9, а 11 остаётся отдельно)

```

---

## 671. Обертка для fetch с повтором при ошибке

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/obertka-dlya-fetch-s-povtorom-pri-oshibke

### Задача

Написать обертку, если пришла ошибка от fetch, чтобы она могла retry.
Если fetch не прошёл, тогда нужен быть ещё один retry, пока retriesCount не станет -1.
```javascript
async function fetchWithRetry(retriesCount, ...fetchArgs) {
  return fetch(...fetchArgs);
}

```

---

## 672. Контекст выполнения в методах объекта

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kontekst-vypolneniya-v-metodah-obekta

### Задача

Что выведется в консоль при вызове различных свойств и методов объекта с this.
```javascript
const obj = {
  a: 1,
  b: this.a + 1,
  c: () => this.a + 1,
  d() {
    return this.a + 1;
  },
  e() {
    return (() => this.a + 1)();
  }
};

console.log(obj.b);
console.log(obj.c());
console.log(obj.d());
console.log(obj.e());

```

---

## 673. Promise и однократное выполнение resolve/reject

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/promise-i-odnokratnoe-vypolnenie-resolvereject

### Задача

Объяснить, как работает Promise, если вызвать resolve() и reject() несколько раз подряд.
```javascript
new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);
  reject('error');
}).then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log('error');
  }
);

```

---

## 674. Порядок вывода при сочетании setTimeout, Promise и рекурсии

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/poryadok-vyvoda-pri-sochetanii-settimeout-promise-i-rekursii

### Задача

Определить порядок вывода в консоль при выполнении синхронного кода, microtask (Promise) и макротасок (setTimeout), включая рекурсивный вызов.
```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
});

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);

setTimeout(() => {
  console.log(5);
}, 0);

console.log(6);

const foo1 = () => {
  console.log('foo1');
  return Promise.resolve().then(foo1);
};

foo1();

```

---

## 675. Поведение hoisting внутри самовызывающейся функции

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/povedenie-hoisting-vnutri-samovyzyvayushejsya-funkcii

### Задача

Разобраться, как работает hoisting переменной name внутри IIFE, и какой вывод будет в консоль.
```javascript
var name = 'Коля!';

(function () {
    if (typeof name === 'undefined') {
        var name = 'Вася';
        console.log('Пока, ' + name);
    } else {
        console.log('Привет, ' + name);
    }
})();

```

---

## 676. Код-ревью №1

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kod-revyu-1

### Задача

Даны файлы - review.md, main.js и review.js. Описание исходной задачи представлено в файле review.md. Решение задачи представлено в файлах main.js и review.js. Провести код-ревью файла review.js

// review.md

Задача: Формирование отчёта по пользователям

📄 Описание:
В компании требуется сервис, который формирует отчёт по пользователям. Вам нужно реализовать функцию, которая
получает список пользователей и преобразует их данные в нужный формат.

🎯 Данные получаем по API:
  - JavaScript
  - GET /api/users

📌 Требования:
✅ Функция принимает массив `userIds` (массив строк) и возвращает данные пользователей.

✅ В зависимости от роли пользователя (`admin`, `manager`, `customer`) данные должны возвращаться в разных
   форматах:
   - 📍 для admin'ов — `id`, `name`, `email`, `role`, `createdAt`, `permissions`
   - 📍 для manager'ов — `id`, `name`, `role`, `department`, `lastLogin`
   - 📍 для customer'ов — `id`, `name`, `role`, `loyaltyPoints`, `lastPurchase`

✅ Поле `permissions` (только для `admin`) должно содержать **только валидные права** (`editUsers`, `deleteUsers`,
   `viewReports`) и быть в CamelCase

✅ Поле `lastLogin` (только для `manager`) должно быть в формате `YYYY-MM-DD HH:mm:ss`

✅ Поле `lastPurchase` (только для `customer`) должно быть в формате `YYYY-MM-DD`

⚠️ Возможны изменения в формате данных в будущем.
```javascript
// main.js

import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Привет, кодосоздатель!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));

```

```javascript
// review.js

export async function getRes(ids) {
  let users = await fetch('/api/users').then(res => res.json());
  const validPermissions = {
    editUsers: true,
    deleteUsers: true,
    viewReports: true,
  };

  let report = [];
  for (let i = 0; i < users.length; i++) {
    if (!ids.includes(users[i].id)) continue;

    let data = {};
    if (users[i].role === 'admin') {
      data = {
        id: users[i].id,
        name: users[i].name,
        email: users[i].email,
        role: users[i].role,
        createdAt: users[i].createdAt,
        permissions: [],
      };

      for (const perm in validPermissions) {
        if (validPermissions[perm] && users[i].permissions.includes(perm)) {
          data.permissions.push(perm.toLowerCase());
        }
      }

    } else if (users[i].role === 'manager') {
      data = {
        id: users[i].id,
        name: users[i].name,
        role: users[i].role,
        department: users[i].department,
        lastLogin: users[i].lastLogin,
      };
    } else if (users[i].role === 'customer') {
      data = {
        id: users[i].id,
        name: users[i].name,
        role: users[i].role,
        loyaltyPoints: users[i].loyaltyPoints,
        lastPurchase: users[i].lastPurchase,
      };
    }
    report.push(data);
  }
  return report;
}

```

---

## 677. Вывод в консоль №105

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-105

### Задача

Что выведет консоль
```javascript
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);

```

---

## 678. Функция реализации дерева

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funkciya-realizacii-dereva

### Задача

Дан список категорий, где title - заголовок самой категории, а parent - заголовок родительской категории. Если parent равен null, то это означает, что это категория первого уровня. Необходимо реализовать функцию createCategoryTree, которая в качестве аргумента будет принимать список и обернет его в дерево (пример дерева указан в комментариях к коду)
```javascript
const categories = [
  {
    "title": "Приготовление напитков",
    "parent": "Техника для кухни"
  },
  {
    "title": "Техника для дома",
    "parent": "Бытовая техника"
  },
  {
    "title": "Варочные панели",
    "parent": "Встраиваемая техника"
  },
  {
    "title": "Бытовая техника",
    "parent": null
  },
  {
    "title": "Встраиваемая техника",
    "parent": "Бытовая техника"
  },
  {
    "title": "Духовые шкафы",
    "parent": "Встраиваемая техника"
  },
  {
    "title": "Продукты питания",
    "parent": null
  },
  {
    "title": "Электрочайники и термопоты",
    "parent": "Техника для кухни"
  },
  {
    "title": "Вытяжки",
    "parent": "Встраиваемая техника"
  },
  {
    "title": "Техника для кухни",
    "parent": "Бытовая техника"
  }
];

function createCategoryTree(list) {
  return
}

console.log(createCategoryTree(categories))

/*
[
  {
    title: "Бытовая техника",
    children: [
      {
        title: "Встраиваемая техника",
        children: [
          { title: "Варочные панели" },
          { title: "Духовые шкафы" },
          { title: "Вытяжки" }
        ]
      },
      {
        title: "Техника для кухни",
        children: [
          { title: "Электрочайники и термопоты" },
          { title: "Приготовление напитков" }
        ]
      },
      {
        title: "Техника для дома"
      }
    ]
  },
  {
    title: "Продукты питания",
  }
]
*/

```

---

## 679. Код-ревью и рефакторинг

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kod-revyu-i-refaktoring

### Задача

Дан компонент на React, который реализует таймер. Необходимо провести код-ревью компонента и сделать рефакторинг кода
```javascript
import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [started, setStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const intervalId = useRef();

  const stopHandler = () => {
    setCurrentTime(0);
    setStarted(false);
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const startHandler = () => {
    if (started) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    } else {
      intervalId.current = setInterval(() => {
        setCurrentTime((prev) => prev + 1);
      }, 1000);
    }

    setStarted(!started);
  };

  useEffect(() => {
    if (currentTime % 5 === 0 && currentTime !== 0) {
      document.querySelector(".timer").classList.add("pulsate");
    }
  }, [currentTime]);

  return (
    <div className="main">
      <div>
        <button onClick={startHandler}>{started ? "Pause" : "Start"}</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
      <div className="timer">{currentTime}</div>
    </div>
  );
}

```

---

## 680. Отладка кода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/otladka-koda

### Задача

Дано приложение генерации случайных. Необходимо устранить проблемы, описанные в комментарии к коду в файлe App.jsx
```javascript
// App.jsx

import List from "./List";

/*
Генератор случайных чисел.

Описание:
Каждый раз, когда нажимаем на "Добавить число", в конец списка добавляется случайное число.

"Старт" — запускает интервал в 1 сек., который добавляет в конец списка случайное число.

"Стоп" — останавливает таймер.

"Показать / Скрыть" — контролирует отображение приложения.

🔴 Проблемы:

1. При нажатии скрыть/показать список, он не раскрывается. Почему?

2. "Стоп" не останавливает таймер. Почему?

3. При нажатии "Показать / Скрыть" список сбрасывается на [1, 2, 3]. Почему?

4. Реализовать удаление числа

5. Улучшите по максимуму приложение)))
*/

export default function App() {
  const [visibleList, setVisibleList] = React.useState(true);

  const toggleVisibleList = () => {
    setVisibleList(visibleList);
  };

  return (
    <div className="App">
      <button onClick={toggleVisibleList}>Показать / Скрыть список</button>
      <br />
      <br />
      <br />
      {visibleList && <List />}
    </div>
  );
}

```

```javascript
// List.jsx

import React from "react";
import "./styles.css";

import Buttons from "./Buttons";

export default function List() {
  const [numbers, setNumbers] = React.useState([1, 2, 3]);
  let timer = null;
  let started = false;

  const addRandomNumber = () => {
    const random = Math.round(Math.random() * 10);
    setNumbers((prev) => [...prev, random]);
  };

  const start = () => {
    timer = setInterval(addRandomNumber, 1000);
    started = true;
  };

  const stop = () => {
    clearInterval(timer);
    started = false;
  };

  return (
    <div className="list">
      <Buttons
        started={started}
        addRandomNumber={() => addRandomNumber()}
        onStart={() => start()}
        onStop={() => stop()}
      />
      <ul>
        {numbers.map((num, index) => (
          <li key={`${index}_${num}`}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

```

```javascript
// Buttons.jsx

import React from "react";

export default function Buttons({ addRandomNumber, onStart, onStop, started }) {
  console.log("render");
  return (
    <div className="buttons">
      <button onClick={addRandomNumber}>Новое число</button>
      <br />
      <button disabled={started} onClick={onStart}>
        Старт
      </button>
      <button onClick={onStop}>Стоп</button>
    </div>
  );
}

```

---

## 681. Вывод в консоль №106

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-106

### Задача

Что выведет консоль
```javascript
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve(3).then(console.log);

new Promise(resolve => setTimeout(resolve, 0)).then(() => console.log(4));

Promise.reject(5).catch(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

```

---

## 682. Реализация Object.groupBy()

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/realizaciya-objectgroupby

### Задача

Написать свою реализацию метода Object.groupBy()
```javascript
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const groupBy = (inventory, callback) => {

}

```

---

## 683. Вывод в консоль №107

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-107

### Задача

Что выведет консоль
```javascript
setTimeout(() => 
  new Promise((res) => {
    console.log(3);
    res(null);
  }).then(() => console.log(4))
);

setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(1));

console.log(6);

setTimeout(() => console.log(7));
console.log(2);

```

---

## 684. Функция преобразования массива

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funkciya-preobrazovaniya-massiva

### Задача

С сервера приходит массив объектов data, в котором структура объектов отличная друг от друга. Необходимо написать функцию flatData, которая в качестве аргумента принимает массив data и преобразует его в массив объектов, где все объекты одинаковые по структуре (пример преобразованного массива указан в комментарии к коду)
```javascript
const data = [
  { id: 1, name: "siberia can code 📘" },
  { id: 2, body: { name: "siberia can code 📘" } },
  { id: 3, type: "person", name: "siberia", lastname: "can code 📘" },
];

const flatData = (data: any) => data;

// [
//   { id: 1, name: "siberia can code 📘" },
//   { id: 2, name: "siberia can code 📘" },
//   { id: 3, name: "siberia can code 📘" },
// ];

```

---

## 685. Код-ревью №2

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kod-revyu-2

### Задача

Провести код ревью файлов App.tsx и Post.tsx
```javascript
// App.tsx

import React, { useEffect, useState } from "react";
import "./index.css";
import PostComponent from "./Post";

export default function App() {
  const posts_list = [
    {
      id: "1",
      name: "siberia can code 📘",
      imagesrc: "https://avatars.githubusercontent.com/u/45297354?v=4",
      text: "first post"
    },
    {
      id: "2",
      name: "theo",
      imagesrc: "https://avatars.githubusercontent.com/u/6751787?v=4",
      text: "second post"
    },
    {
      id: "3",
      name: "dan abramov",
      imagesrc: "https://avatars.githubusercontent.com/u/810438?v=4",
      text: "third post"
    }
  ];

  const [selectedId, setPostId] = React.useState(0);
  const [post, setSelectedPost] = React.useState(posts_list[0]);
  console.log("@", selectedId);

  useEffect(() => {
    setSelectedPost(posts_list[selectedId]);
  }, [selectedId]);

  return (
    <div className="App">
      <div>selected user:</div>
      <div className="user">
        <img
          className={"avatar"}
          src={post.imagesrc}
          style={{ width: "30px" }}
        />
        {post.name}
      </div>
      <br />
      <br />
      <br />
      <div>posts list</div>
      {posts_list.length
        ? posts_list.map((el, index) => (
            <PostComponent data={el} onClick={() => setPostId(index)} />
          ))
        : []}
    </div>
  );
}

```

```javascript
// Post.tsx

const Posts = ({ data, onClick }: any) => {
  const IMAGE = data.imagesrc;

  return (
    <div className="post" onClick={onClick}>
      <img className={"avatar"} src={IMAGE} style={{ width: "30px" }} />
      {data.name}
      <p>{data.text}</p>
    </div>
  );
};

export default Posts;

```

---

## 686. Код-ревью №3

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kod-revyu-3

### Задача

Провести код ревью файлов App.tsx и Post.tsx
```javascript
// App.tsx

import React, { useEffect, useState } from "react";
import "./index.css";
import PostComponent from "./Post";

export default function App() {
  const posts_list = [
    {
      id: "1",
      name: "siberia can code 📘",
      imagesrc: "https://avatars.githubusercontent.com/u/45297354?v=4",
      text: "first post"
    },
    {
      id: "2",
      name: "theo",
      imagesrc: "https://avatars.githubusercontent.com/u/6751787?v=4",
      text: "second post"
    },
    {
      id: "3",
      name: "dan abramov",
      imagesrc: "https://avatars.githubusercontent.com/u/810438?v=4",
      text: "third post"
    }
  ];

  const [selectedId, setPostId] = React.useState(0);
  const [post, setSelectedPost] = React.useState(posts_list[0]);
  console.log("@", selectedId);

  useEffect(() => {
    setSelectedPost(posts_list[selectedId]);
  }, [selectedId]);

  return (
    <div className="App">
      <div>selected user:</div>
      <div className="user">
        <img
          className={"avatar"}
          src={post.imagesrc}
          style={{ width: "30px" }}
        />
        {post.name}
      </div>
      <br />
      <br />
      <br />
      <div>posts list</div>
      {posts_list.length
        ? posts_list.map((el, index) => (
            <PostComponent data={el} onClick={() => setPostId(index)} />
          ))
        : []}
    </div>
  );
}

```

```javascript
// Post.tsx

const Posts = ({ data, onClick }: any) => {
  const IMAGE = data.imagesrc;

  return (
    <div className="post" onClick={onClick}>
      <img className={"avatar"} src={IMAGE} style={{ width: "30px" }} />
      {data.name}
      <p>{data.text}</p>
    </div>
  );
};

export default Posts;

```

---

## 687. Код-ревью №4

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kod-revyu-4

### Задача

Провести код ревью файлов App.tsx и Todo.tsx
```javascript
// App.tsx

import React, { useState } from "react";
import "./index.css";
import Todo from "./Todo";

export const todo_list = [
  {
    name: "clear",
    id: "1",
    imagesrc: "https://avatars.githubusercontent.com/u/45297354?v=4",
  },
  {
    name: "buy",
    id: "2",
    imagesrc: "https://avatars.githubusercontent.com/u/6751787?v=4",
  },
  { name: "change", id: "3" },
  { name: "code", id: "4" },
  { name: "test", id: "5" },
];

export default function App() {
  const [search, setsearch] = React.useState("");
  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(data) => setsearch(data.target.value)}
      />
      {todo_list
      .filter((todo) => todo.name.includes(search))
      .map((el) => (
        <Todo todo={el} />
      ))}
    </div>
  );
}

```

```javascript
// Todo.tsx

import "./todo.css";

const Todo = ({ todo }: any) => (
  <div className="todo">
    <img
      style={{ width: 40, borderRadius: 40 }}
      src={todo.imagesrc}
      alt={todo.name}
    />
    {todo.name}
  </div>
);

export default Todo;

```

---

## 688. Функция подсчета общей суммы товаров с учетом и без учета скидки

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funkciya-podscheta-obshej-summy-tovarov-s-uchetom-i-bez-ucheta-skidki

### Задача

Дан список продуктов products. Написать функцию calculateTotal, которая в качестве аргументов принимает список продуктов products и скидку discountPercentage. Функция calculateTotal должна подсчитать общую сумму товаров с учетом и без учета скидки, а также вывести результат в виде объекта result, пример которого указан в комментарии к коду. Реализация должна быть с использованием TypeScript

```javascript
const products = [
  { id: 1123, price: 20, name: 'apple', color: 'red', category: 'fruit' },
  { id: 4322, price: 20, name: 'apple', ferm: 'siberia', category: 'vegetable' },
];

function calculateTotal(products, discount) {}

const discountPercentage = { fruit: 10, vegetable: 30 };
const result = calculateTotal(products, discountPercentage);

console.log("receipt", result);
// "receipt", {
//   "totalWithoutDiscount": 40,
//   "totalWithDiscount": 32,
//   "discount": {
//     "fruit": 10,
//     "vegetable": 30
//   },
//   "items": [
//     {
//       "id": 1123,
//       "price": 20,
//       "name": "apple",
//       "color": "red",
//       "category": "fruit"
//     },
//     {
//       "id": 4322,
//       "price": 20,
//       "name": "apple",
//       "ferm": "siberia",
//       "category": "vegetable"
//     }
//   ]
// }

```

---

## 689. Вывод в консоль №108

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-108

### Задача

Что выведет консоль
```javascript
console.log(typeof null);

const fn = () => {};
console.log(fn instanceof Object);

console.log(1 == "1");

console.log(1 === "1");

console.log({ a: 1 } == { a: 1 });

const a = {};
const b = {};
a[b] = '1';
console.log(a);

```

---

## 690. Вывод в консоль №109

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/vyvod-v-konsol-109

### Задача

Что выведет консоль
```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

let p = new Promise(function(resolve, reject) {
  console.log(4);
  resolve();
});

p.then(function() {
  console.log(5);
});

Promise.resolve().then(() => setTimeout(() => console.log(6)));

Promise.resolve().then(() => console.log(7));

setTimeout(() => console.log(8));

console.log(9);

```

---

## 691. Функция подсчета количества символов в строке

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funkciya-podscheta-kolichestva-simvolov-v-stroke

### Задача

Необходимо реализовать функцию getNumberCharacters, которая принимает строку, подсчитывает количество повторений каждого символа и выводит результат в формате *количество символов**символ*

---

## 692. Код-ревью и отладка кода

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/kod-revyu-i-otladka-koda

### Задача

Необходимо провести код-ревью и отладить код по своему усмотрению
```javascript
const ListItem = (props) => {
  const { name, onChange } = props;
  return (
    <li><input type="checkbox" onChange={onChange} name={name} />{name}</li>
  );
};

export default function List() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  useEffect(() => {
    document.addEventListener('dblclick', () => {
      console.log('dblclicked');
    });
  }, []);

  const handleChange = (e) => {
    if (selectedCheckboxes.includes(e.target.name)) {
      setSelectedCheckboxes(selectedCheckboxes.filter(el => el !== e.target.name));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, e.target.name]);
    }
  };

  const towns = [
    { name: 'Moscow' },
    { name: 'St. Petersburg' },
    { name: 'London' },
  ];

  const marks = [
    { name: 'Toyota' },
    { name: 'Haval' },
    { name: 'Nissan' },
  ];

  return (
    <div>
      <ul>Посещенные Вами города: {towns.map(el => <ListItem onChange={handleChange} name={el.name} />)}</ul>
      <ul>Желаемые Вами марки машин: {marks.map(el => <ListItem onChange={handleChange} name={el.name} />)}</ul>
    </div>
  );
}

```

---

## 693. Моделирование роста популяции рыб-фонарей

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/modelirovanie-rosta-populyacii-ryb-fonarej

### Задача

Для моделирования необходимо использовать числовую последовательность, представляющую цикл размножения рыб-фонарей, и проследить рост их популяции за заданное количество дней. Каждая рыба-фонарь имеет таймер, указывающий, через сколько дней она родит новую рыбу. Когда таймер достигает нуля, рыба сбрасывает его до 6 и рожает новую особь, которая получает таймер 8. Входными данными является список чисел, каждое из которых соответствует таймеру одной рыбы. Например, начальное состояние [3, 4, 3, 1, 2] соответствует 5 рыбам с соответствующими таймерами. 
Задача — смоделировать этот процесс и определить количество рыб через заданное количество дней: 80 дней для базового варианта и 256 дней для продвинутого.

Пример моделирования роста популяции
Начальное состояние: 3,4,3,1,2  
После 1 дня: 2,3,2,0,1  
После 2 дней: 1,2,1,6,0,8  
После 3 дней: 0,1,0,5,6,7,8

---

## 694. Рефакторинг кода №3

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/refaktoring-koda-3_3

### Задача

Провести рефакторинг кода
```kotlin
val list = listOf(1, 3, 5)

fun main() {
    list.add(7)
    list.forEvery { it ->
        if (it == 3) {
            return
        }
        println("$it")
    }

    println("Done!")
}

synchronized fun <reified T> List<T>.forEvery(itemAction: (T) -> Unit) {
    list.reversed().forEach { itemAction(it) }
}
```

---

## 695. Найти ошибку в коде

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/najti-oshibku-v-kode-4

### Задача

Найти и исправить ошибки в коде
```javascript
 import React, { Component } from "react";

export default class App extends Component {
    onClick = (event) => {
        this.setState({ event });
    });

    logEvent = () => {
        console.log(this.state.event.target);
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me</button>
                <button onClick={this.logEvent}>log event</button>
            </div>
        );
    }
}

```

---

## 696. Функция счетчик

- **Грейд:** —
- **Навыки:** —
- **Компания:** —
- **Тип:** {'id': 1, 'title': 'Live-coding', 'slug': 'live-coding'}
- **Ссылка:** https://easyoffer.ru/frontend-developer/live-code-task/funktsiya-schetchik-2

### Задача

Реализовать функцию, которая при каждом вызове будет увеличивать свое значение на единицу, начнем от 0. Ограничение: в глобальной области видимости доступна лишь сама функция. Как это сделать, с помощью IIFE?

---

