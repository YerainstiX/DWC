import React, { useState } from "react"
import "./Filters.css"

const Filters = ({ filteredProducts, setFilteredProducts, products }) => {
    const [showFilters, setShowFilters] = useState(false)
    const [sortField, setSortField] = useState("")
    const [sortOrder, setSortOrder] = useState("")
    const [minValue, setMinValue] = useState("")
    const [maxValue, setMaxValue] = useState("")
    const [rangeField, setRangeField] = useState("")

    const filterByName = (e) => {
        const text = e.target.value.toLowerCase()

        if (text.trim() === "") return setFilteredProducts(products)

        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(text),
        )

        setFilteredProducts(filtered)
    }

    const sort = () => {
        if (!sortField && !sortOrder) return setFilteredProducts(products)

        const sorted = [...products]

        sorted.sort((a, b) => {
            let order = 0

            if (sortField === "name") order = a.name.localeCompare(b.name)

            if (sortField === "price") order = a.price - b.price

            if (sortField === "weight") order = a.weight - b.weight

            return sortOrder === "asc" ? order : -order
        })

        setFilteredProducts(sorted)
    }

    const applyRangeFilter = () => {
        if (!rangeField) return

        setFilteredProducts(
            products.filter((p) => {
                const value = p[rangeField]

                if (minValue && maxValue) {
                    return value >= minValue && value <= maxValue
                }
                if (minValue) {
                    return value >= minValue
                }
                if (maxValue) {
                    return value <= maxValue
                }
                return true
            }),
        )
    }

    return (
        <div className="products_filters">
            <input
                type="search"
                placeholder="Search by name"
                onChange={filterByName}
            />
            <button
                onClick={() => {
                    if (!showFilters) return setShowFilters(true)
                    return setShowFilters(false)
                }}
            >
                FILTERS
            </button>

            {showFilters && (
                <div className="filters_dropdown">
                    <div className="filters_sort">
                        <select
                            value={sortField}
                            onChange={(e) => setSortField(e.target.value)}
                        >
                            <option value="">Order by...</option>
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                            <option value="weight">Weight</option>
                        </select>

                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            disabled={!sortField}
                        >
                            <option value="">Order</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                        <button onClick={sort}>ORDER</button>
                    </div>
                    <div className="filters_range">
                        <select
                            value={rangeField}
                            onChange={(e) => setRangeField(e.target.value)}
                        >
                            <option value="">Filter by...</option>
                            <option value="price">Price</option>
                            <option value="weight">Weight</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Min"
                            value={minValue}
                            onChange={(e) => setMinValue(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Max"
                            value={maxValue}
                            onChange={(e) => setMaxValue(e.target.value)}
                        />

                        <button onClick={applyRangeFilter}>Apply</button>
                    </div>
                    <button
                        className="filters_reset"
                        onClick={() => {
                            setFilteredProducts(products)
                        }}
                    >
                        RESET
                    </button>
                </div>
            )}
        </div>
    )
}

export default Filters
