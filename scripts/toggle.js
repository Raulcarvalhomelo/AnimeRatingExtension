document.getElementById('toggleButton').addEventListener('click', () => {
    var root = document.documentElement;
    var currentBackground = getComputedStyle(root).getPropertyValue('--background').trim();

    currentBackground === 'black'
        ? (root.style.setProperty('--background', 'white'), root.style.setProperty('--color', 'black'))
        : (root.style.setProperty('--background', 'black'), root.style.setProperty('--color', 'white'));
});
