//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function () {
	let inputValue = Number(document.getElementById('ip').value);
	const output = document.getElementById('output');

	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(inputValue);
		}, 2000);
	})
	.then(value => {
		output.textContent = `Result: ${value}`;
		return new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve(value * 2);
			}, 1000);
		});
	})
	.then(value => {
		output.textContent = `Result: ${value}`;
		return new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve(value - 3);
			},1000);
		});
	})
	.then(value => {
        output.textContent = `Result: ${value}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value / 2);
            }, 1000);
        });
    })
	.then(value => {
        output.textContent = `Result: ${value}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value + 10);
            }, 1000);
        });
    })
	.then(value => {
        output.textContent = `Final Result: ${value}`;
    })
	.catch(error => {
        output.textContent = `Error: ${error}`;
    });
})