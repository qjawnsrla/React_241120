import { useState, useEffect } from "react";

// 초기 목록을 상수로 정의
const initialNames = [
  { id: 1, text: "html 연습" },
  { id: 2, text: "css 연습" },
  { id: 3, text: "js 연습" },
  { id: 4, text: "react 연습" },
];

const TodoList = () => {
  const [names, setNames] = useState(() => {
    const storedNames = localStorage.getItem("names");
    return storedNames ? JSON.parse(storedNames) : initialNames;
  });

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = [...names, { id: nextId, text: inputText }];
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onClickRemove = () => {
    setNames(initialNames); // 초기 목록으로 상태를 설정
    localStorage.setItem("names", JSON.stringify(initialNames)); // 로컬 스토리지를 초기 목록으로 업데이트
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <button onClick={onClickRemove}>초기화</button>
      <ul>
        {names.map((name) => (
          <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </>
  );
};
export default TodoList;
