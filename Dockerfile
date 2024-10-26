# 使用 Node.js 18 的 Alpine 镜像作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# # 创建一个非 root 用户
# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安装所有依赖，包括开发依赖
RUN npm install && \
    npm install @tailwindcss/typography && \
    npm install -g next && \
    npm cache clean --force

# 复制源代码
# COPY --chown=nextjs:nodejs . .

COPY . .

# 设置正确的权限
RUN chmod -R 777 /app

# # 切换到非 root 用户
# USER nextjs

# 暴露端口
EXPOSE 3000

# 启动应用（开发模式）
CMD ["npm", "run", "dev"]
