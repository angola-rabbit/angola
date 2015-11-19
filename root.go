package main

import (
	"github.com/gin-gonic/gin"
)

func getRoot(c *gin.Context) {
	c.HTML(200, "root", gin.H{
		"Version": "0.0.2",
	})
}
