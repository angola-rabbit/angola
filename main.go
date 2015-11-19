package main

import (
	"github.com/gin-gonic/gin"
	"github.com/yosssi/ace"
)

func main() {
	r := gin.Default()
	r.Static("/static", "./static")

	// AceRenderを作る
	aceRender := &AceRender{
		Options: &AceRenderOptions{
			AceOptions: ace.InitializeOptions(&ace.Options{
				Extension: "ace",
				BaseDir:   "templates",
			}),
			BaseName: "layout",
		},
	}
	r.HTMLRender = aceRender

	r.GET("/", getRoot)
	r.GET("/monitor", getMonitor)
	r.GET("/search", getSearch)

	r.Run(":8080")
}
