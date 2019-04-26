const base = require('./jest.config')
module.exports = Object.assign({}, base, {
    reporters: ["jest-junit"],   //添加jest-junit分析报表
    collectCoverage: true,       //是否收集测试覆盖率
    //定义测试范围：哪些测试哪些不测试
    collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
    coverageDirectory: 'coverage',  //生产报告放置目录
    coverageReporters: ['text', 'lcov'],  //生成控制台等报告
})
