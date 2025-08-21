import React from "react";

function Filter({ onChange }) {
  return (
    <div style={{ margin: "20px" }}>
      <label>タイプで絞り込み: </label>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="all">すべて</option>
        <option value="fire">炎</option>
        <option value="water">水</option>
        <option value="grass">草</option>
        <option value="electric">でんき</option>
        <option value="psychic">エスパー</option>
        <option value="bug">むし</option>
        <option value="rock">いわ</option>
        <option value="ground">じめん</option>
        <option value="ice">こおり</option>
        <option value="dragon">ドラゴン</option>
      </select>
    </div>
  );
}

export default Filter;
