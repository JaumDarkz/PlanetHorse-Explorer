"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import styles from "./styles.module.scss"
import type { FilterOptions } from "../../types"

interface FilterDropdownProps {
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ filters, onFiltersChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    })
  }

  const clearFilters = () => {
    onFiltersChange({
      level: "",
      horseType: "",
      status: "",
      region: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some((filter) => filter !== "")

  return (
    <div className={styles.filterContainer} ref={dropdownRef}>
      <button
        className={`${styles.filterButton} ${hasActiveFilters ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.filterIcon}>⋯</span>
        {hasActiveFilters && <span className={styles.activeIndicator}></span>}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <h3>Filters</h3>
            <button className={styles.clearButton} onClick={clearFilters} disabled={!hasActiveFilters}>
              Clear All
            </button>
          </div>

          <div className={styles.filterGroup}>
            <label>Player Level</label>
            <select value={filters.level} onChange={(e) => handleFilterChange("level", e.target.value)}>
              <option value="">All Levels</option>
              <option value="BEGINNER">Beginner (1-10)</option>
              <option value="INTERMEDIATE">Intermediate (11-50)</option>
              <option value="EXPERT">Expert (51+)</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Horse Type</label>
            <select value={filters.horseType} onChange={(e) => handleFilterChange("horseType", e.target.value)}>
              <option value="">All Types</option>
              <option value="LEGENDARY">Legendary</option>
              <option value="EPIC">Epic</option>
              <option value="RARE">Rare</option>
              <option value="UNCOMMON">Uncommon</option>
              <option value="COMMON">Common</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Status</label>
            <select value={filters.status} onChange={(e) => handleFilterChange("status", e.target.value)}>
              <option value="">All Status</option>
              <option value="ONLINE">Online</option>
              <option value="RACING">Racing</option>
              <option value="OFFLINE">Offline</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Region</label>
            <select value={filters.region} onChange={(e) => handleFilterChange("region", e.target.value)}>
              <option value="">All Regions</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="South America">South America</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown
