async function loadLesson(lessonName) {
  const res = await fetch(`lessons/${lessonName}.json`);
  const data = await res.json();
  renderLesson(data);
}

function renderLesson(lesson) {
  const container = document.getElementById('lesson-container');
  container.innerHTML = `
    <h2>${lesson.title}</h2>
    <div>
      ${lesson.letters.map(letter => `
        <button onclick="speak('${letter}')">${letter}</button>
      `).join('')}
    </div>
    <div>
      ${lesson.words.map(item => `
        <div>
          <button onclick="speak('${item.word}')">${item.word}</button>
        </div>
      `).join('')}
    </div>
    <div>
      <h3>Câu hỏi kiểm tra:</h3>
      <p>${lesson.quiz[0].question}</p>
      ${lesson.quiz[0].choices.map(choice => `
        <button onclick="checkAnswer('${lesson.lesson_id}', '${lesson.quiz[0].answer}', '${choice}')">${choice}</button>
      `).join('')}
    </div>
  `;
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  speechSynthesis.speak(utterance);
}

function checkAnswer(lessonId, correctAnswer, selected) {
  if (selected === correctAnswer) {
    alert("🎉 Chính xác! Giỏi lắm!");
    saveProgress(lessonId, 10);
  } else {
    alert("❌ Sai rồi, thử lại nhé!");
  }
}

function saveProgress(lessonId, score) {
  let progress = JSON.parse(localStorage.getItem('progress')) || {};
  progress[lessonId] = score;
  localStorage.setItem('progress', JSON.stringify(progress));
}

function renderProgress() {
  let progress = JSON.parse(localStorage.getItem('progress')) || {};
  let output = '<h3>Kết quả học tập</h3><ul>';
  for (let key in progress) {
    output += `<li>${key}: ${progress[key]} điểm</li>`;
  }
  output += '</ul>';
  document.getElementById('progress-list').innerHTML = output;
}
