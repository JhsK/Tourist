const content = [].join("\n");

const editor = new toastui.Editor({
  el: document.querySelector("#editor"),
  previewStyle: "vertical",
  initialEditType: "wysiwyg",
  height: "500px",
  initialValue: content,
});
