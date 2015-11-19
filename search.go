package main

import (
	"github.com/gin-gonic/gin"
)

func getSearch(c *gin.Context) {
	c.HTML(200, "search", gin.H{
	})
}
