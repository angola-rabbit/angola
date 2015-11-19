package main

import (
	"github.com/gin-gonic/gin"
)

func getMonitor(c *gin.Context) {
	c.HTML(200, "monitor", gin.H{
	})
}
