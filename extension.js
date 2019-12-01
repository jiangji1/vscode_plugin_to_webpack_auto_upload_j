
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const child  = require('child_process'); 

async function handler (com) {
	const pa = vscode.workspace.workspaceFolders[0].uri.fsPath
	const paj = path.resolve(pa, 'package.json')
	if (!fs.existsSync(paj)) {
		vscode.window.showWarningMessage('当前工作目录没有package.josn文件')
		return
	}
	
	const config = JSON.parse(fs.readFileSync(paj))
	if (
		Object.prototype.hasOwnProperty.call(config, 'up') &&
		Object.prototype.toString.call(config.up) === '[object Object]'
	) {
		const a = com === 'df'
		config.up.kaiguan = a? true: false
		fs.writeFileSync(paj, JSON.stringify(config, 0, '\t'))
		vscode.window.showInformationMessage(`修改为成功,${a}是${a? '': '不'}发布`)
		
		const startShell = config.up.start
		if (!startShell) {
			vscode.window.showInformationMessage('在package.json中,未正确取到up中的start')
			return
		}
		await vscode.commands.executeCommand('workbench.action.terminal.focus')
		startShell &&
		vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{ "text": `${startShell} \n` })
	}
}

function activate(context) {
	const df = vscode.commands.registerCommand('df', async function (url) {
		handler('df')
	});
	const d = vscode.commands.registerCommand('d', async function (url) {
		handler('d')
	});

	context.subscriptions.push(df, d);
}
exports.activate = activate;

module.exports = {
	activate,
}
