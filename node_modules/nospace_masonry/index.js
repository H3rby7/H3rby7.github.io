/* globals $ */
'use strict';
(() => {
  const FIELD_FREE = -2
  const FIELD_BLOCKED = -1

  function NsMasonry (opts) {
    if (!opts || !opts.containerId || !opts.colWidth || !opts.rowHeight) throw new Error('call with {containerId, colWidth, rowHeight}')
    const containerId = opts.containerId
    let colWidth = opts.colWidth
    let rowHeight = opts.rowHeight
    let vProperty = opts.invertY ? 'bottom' : 'top'
    let hProperty = opts.invertX ? 'right' : 'left'
    let animate = opts.animate
    let autoResize = opts.autoResize

    let container, cache

    cache = {
      width: null,
      itemCount: null
    }

    const self = this
    self.update = update
    self.itemCount = 0

    init()

    return self

    function update (force) {
      /* get Width as of now */
      if (container.style) container.style.width = ''
      const containerWidth = container.clientWidth
      const columnCount = Math.floor(containerWidth / colWidth)
      const newWidth = columnCount * colWidth

      const items = $('#' + containerId).children()

      /* abort conditions to save CPU */
      if (!force && cache.width === newWidth && cache.itemCount === items.length) return false

      cache.width = newWidth
      container.style.width = newWidth + 'px'

      self.itemCount = cache.itemCount = items.length

      const grid = createGrid({columnCount})
      fitItems({items, grid})
      applyLayout({layout: grid.getGrid(), items, container})
      // grid.printGrid()
    }

    function fitItems ({items, grid}) {
      for (let i = 0; i < items.length; i++) {
        const width = items[i].offsetWidth
        const height = items[i].offsetHeight
        grid.fitElement({
          width: Math.floor(width / colWidth),
          height: Math.floor(height / rowHeight),
          id: i
        })
      }
    }

    function applyLayout ({layout, items, container}) {
      if (layout.length === 0) return
      const height = layout.length
      const width = layout[0].length
      for (let iR = 0; iR < height; iR++) {
        for (let iC = 0; iC < width; iC++) {
          let field = layout[iR][iC]
          if (field > FIELD_BLOCKED) {
            let item = items[field]
            if (item && item.style) {
              item.style[vProperty] = iR * rowHeight + 'px'
              item.style[hProperty] = iC * colWidth + 'px'
            }
          }
        }
      }
      container.style.height = (height * rowHeight) + 'px'
    }

    function init () {
      let query = $('#' + containerId)
      if (!query || query.length === 0) throw new Error('Could not find a DOM Element matching the ID')
      container = query[0]
      if (autoResize) {
        $(window).on('resize', update)
      }
      if (animate) {
        let items = container.children
        for (let i = 0; i < items.length; i++) {
          if (items[i].style) {
            items[i].style[vProperty] = $(window).height() + 'px'
          }
        }
      }
      update()
    }
  }

  function createGrid ({columnCount}) {
    let grid
    grid = []

    return {
      fitElement,
      getGrid,
      printGrid
    }

    function fitElement (element) {
      if (!element.width || !element.height) return
      let row, col
      for (row = 0; row <= grid.length; row++) {
        col = fitsInRow({row, element})
        if (col > -1) break
      }
      if (row + element.height > grid.length) {
        let rowsToAdd = row + element.height - grid.length
        addRows(rowsToAdd)
      }
      placeElement({element, row, col})
    }

    function fitsInRow ({row, element}) {
      // returns the index where the element would fit or -1 if it does not.
      // check for index targeting a new row
      if (row >= grid.length) return 0
      // move element inside the row and check if it fits
      for (let col = 0; col < columnCount; col++) {
        // element is too fat
        if (col + element.width > columnCount) return -1
        if (fitsAtPosition({element, row, col})) return col
      }
      return -1
    }

    function fitsAtPosition ({element, row, col}) {
      for (let iC = 0; iC < element.width; iC++) {
        for (let iR = 0; iR < element.height; iR++) {
          if (row + iR >= grid.length) break
          if (grid[row + iR][col + iC] > FIELD_FREE) {
            return false
          }
        }
      }
      return true
    }

    function placeElement ({element, row, col}) {
      // block spots according to width and height
      for (let iR = 0; iR < element.height; iR++) {
        // in every row block these spots
        for (let iC = 0; iC < element.width; iC++) {
          grid[row + iR][col + iC] = FIELD_BLOCKED
        }
      }
      // add element origin to grid
      grid[row][col] = element.id
    }

    function addRows (count) {
      if (count < 1) return
      for (let i = 0; i < count; i++) {
        grid.push(new Array(columnCount).fill(FIELD_FREE))
      }
    }

    function getGrid () {
      return grid
    }

    function printGrid () {
      let out = ''
      for (let iR = 0; iR < grid.length; iR++) {
        for (let iC = 0; iC < columnCount; iC++) {
          let val = grid[iR][iC]
          out += (val > -1 ? ' ' : '') + val + ' '
        }
        out += '\n'
      }
      console.log(out)
    }
  }

  window.NsMasonry = NsMasonry
})()
