
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
		const arr = ['build', 'build_upload_test', 'build_upload_pro']
		const a = arr[com]
		config.up.kaiguan = a
		fs.writeFileSync(paj, JSON.stringify(config, 0, '\t'))
		vscode.window.showInformationMessage(`修改为成功:${a}`)
		
		const startShell = config.up[com]
		if (!startShell) {
			vscode.window.showInformationMessage('在package.json中,未正确取到up中的shell命令')
			return
		}
		await vscode.commands.executeCommand('workbench.action.terminal.focus')
		startShell &&
		vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{ "text": `${startShell} \n` })
	}
}

function activate(context) {
	const build = vscode.commands.registerCommand('build', async function (url) {
		handler('build')
	});
	const build_upload_test = vscode.commands.registerCommand('build_upload_test', async function (url) {
		handler('build_upload_test')
	});
	const build_upload_pro = vscode.commands.registerCommand('build_upload_pro', async function (url) {
		handler('build_upload_pro')
	});

	context.subscriptions.push(build, build_upload_test, build_upload_pro);
}
exports.activate = activate;

module.exports = {
	activate,
}
