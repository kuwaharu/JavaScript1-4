'use strict';
const title = '=========================\n現在持っているタスクの一覧\n========================';

const tasks = [
{
  name: '机を片付ける',
  genre: '掃除',
},
{
  name: '牛乳を買う',
  genre: '買い物',
},
{
  name: '運動',
  genre: '散歩する',
},
];

const showTasks = () => {
  console.log(title)
  tasks.forEach((task, index) => 
    console.log(`${index}: [内容] ${task.name} [ジャンル] ${task.genre}`),
  )
};
showTasks();

const job = prompt("タスクを入力してください");

const genre = prompt("ジャンルを入力してください");

tasks.push({
  name: job,
  genre,
})

alert('新しいタスクを追加しました。');

showTasks();

const pick = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
