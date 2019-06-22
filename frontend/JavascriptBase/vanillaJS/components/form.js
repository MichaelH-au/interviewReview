let createLoginForm = function (container) {
    const tpl = `
    <form>
        <input type="text" name = "uname">
        <input type="text" name = "password">
        <input type="submit" value="login" id="submit">
    </form>
    `
    container.innerHTML = tpl
}