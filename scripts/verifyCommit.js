//  from  vue-next verifyCommit.js
/**
 *  feat：新功能（feature）
 *  fix：修补bug
 *  docs：文档（documentation）
 *  style： 格式（不影响代码运行的变动）
 *  refactor：重构（即不是新增功能，也不是修改bug的代码变动）
 *  test：增加测试
 *  chore：构建过程或辅助工具的变动
 */
const chalk = require('chalk')

const msgPath = process.env.HUSKY_GIT_PARAMS
console.log(msgPath)
const msg = require('fs')
    .readFileSync(msgPath, 'utf-8')
    .trim()

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/
if (!commitRE.test(msg)) {
    console.log()
    console.error(
        `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
            `invalid commit message format -> commit 提交规范不合格 请重新提交 `
        )}\n\n${chalk.red(
            `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
        )}    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
            `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}\n\n`
    )
    process.exit(1)
}
