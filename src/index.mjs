import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);  
};

// 未完了のリストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // Complete Button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから要素を削除
    deleteFromIncompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode; // 完了リストに追加する要素

    const text = addTarget.firstElementChild.innerText; // TODOの内容
    
    // div以下を初期化
    addTarget.textContent = null;

    // li生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンの親タグを削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // text取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // div以下の設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // Delete Button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
