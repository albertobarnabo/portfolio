#!/bin/bash

# 升级 React 和 React DOM
npm install react@latest react-dom@latest

# 升级受影响的服务器组件包
npm install react-server-dom-webpack@latest
npm install react-server-dom-parcel@latest
npm install react-server-dom-turbopack@latest

# 升级特定版本的 Next.js（根据需要选择一个）
# 请根据您当前使用的 Next.js 版本选择相应的命令

# 如果您使用 Next.js 15.0.x
# npm install next@15.0.5

# 如果您使用 Next.js 15.1.x
# npm install next@15.1.9

# 如果您使用 Next.js 15.2.x
# npm install next@15.2.6

# 如果您使用 Next.js 15.3.x
# npm install next@15.3.6

# 如果您使用 Next.js 15.4.x
# npm install next@15.4.8

# 如果您使用 Next.js 15.5.x
# npm install next@15.5.7

# 如果您使用 Next.js 16.0.x
# npm install next@16.0.7

# 升级 Vite RSC 插件
npm install @vitejs/plugin-rsc@latest

# 再次确保 React 相关包为最新
npm install react@latest react-dom@latest
npm install react-server-dom-parcel@latest
npm install react-server-dom-webpack@latest