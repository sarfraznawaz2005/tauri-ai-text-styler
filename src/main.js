const invoke = window.__TAURI__.invoke;

async function changeStyle(style, e) {
  const inputText = document.getElementById('inputText').value;
  const responseArea = document.getElementById('responseArea');
  const errorDiv = document.getElementById('error');
  const outpoutDiv = document.getElementById('output');

  responseArea.innerHTML = '';
  errorDiv.innerHTML = '';
  outpoutDiv.style.display = 'none';
  e.disabled = true;

  if (inputText.trim() === '') {
    errorDiv.innerHTML = 'Please enter some text.';
  } else {
    let stylePrompt;
    switch (style) {
      case 'easy-to-understand':
        stylePrompt = "Rephrase the following text to make it very easy to understand with simple english without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'professional':
        stylePrompt = "Rephrase the following text to make it sound more professional without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'formal':
        stylePrompt = "Rephrase the following text to make it more formal without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'friendly':
        stylePrompt = "Rephrase the following text to make it sound more friendly and casual without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'summarize':
        stylePrompt = "Summarize the following text concisely without using any markdown or HTML syntax, your answer must be pure text. Summarize Text:"
        break
      case 'persuasive':
        stylePrompt = "Rephrase the following text to make it more persuasive without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'technical':
        stylePrompt = "Rephrase the following text to make it more technical without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'creative':
        stylePrompt = "Rephrase the following text in a more creative and imaginative way without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'emotional':
        stylePrompt = "Rephrase the following text to make it more emotional and heartfelt without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'step-by-step':
        stylePrompt = "Rephrase the following text into clear step-by-step instructions without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'detailed':
        stylePrompt = "Rephrase the following text to include more details and explanations without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'humorous':
        stylePrompt = "Rephrase the following text to make it more humorous and funny without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'inspirational':
        stylePrompt = "Rephrase the following text to make it more inspirational and motivating without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      case 'clarify':
        stylePrompt = "Clarify and explain the following text in simpler terms without using any markdown or HTML syntax, your answer must be pure text. Clarify Text:"
        break
      case 'engaging':
        stylePrompt = "Rephrase the following text to make it more engaging and interesting without using any markdown or HTML syntax, your answer must be pure text. Rephrase Text:"
        break
      default:
        stylePrompt = "Rephrase the following text:"
    }

    const resultText = await invoke('get_ai_response', { prompt: stylePrompt + " " + inputText });

    responseArea.innerHTML = resultText.replace(/\n/g, '<br>'); // Convert new lines to <br> for display;

    outpoutDiv.style.display = 'block';
  }

  e.disabled = false;
}

function copyToClipboard(e) {
  const responseArea = document.getElementById('responseArea');
  const range = document.createRange();
  range.selectNode(responseArea);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  e.innerText = "Copied!";

  setTimeout(function () {
    e.innerText = "Copy To Clipboard";
  }, 500);

}