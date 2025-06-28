"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import styles from "./styles.module.scss"
import SearchBar from "@/components/global/SearchBar"
import Pagination from "@/components/global/Pagination"
import LeaderboardTable from "../../components/LeaderboardTable"
import FilterDropdown from "../../components/FilterDropdown"
import type { FilterOptions, SortOption } from "../../types"
import { mockPlayers } from "../../utils/mocks/mockPlayers"

const PAGE_SIZE = 20

const LeaderboardPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState<SortOption>("TOTAL_POINTS")
  const [filters, setFilters] = useState<FilterOptions>({
    level: "",
    horseType: "",
    status: "",
    region: "",
  })

  const filteredPlayers = useMemo(() => {
    if (!searchTerm.trim() && !Object.values(filters).some((f) => f)) {
      return mockPlayers
    }

    return mockPlayers.filter((player) => {
      // Search filter
      const searchMatch =
        !searchTerm.trim() ||
        [player.username, player.wallet, player.favoriteHorse?.name, player.region].some((field) =>
          field?.toLowerCase().includes(searchTerm.toLowerCase()),
        )

      // Advanced filters
      const levelMatch =
        !filters.level ||
        (filters.level === "BEGINNER" && player.level <= 10) ||
        (filters.level === "INTERMEDIATE" && player.level > 10 && player.level <= 50) ||
        (filters.level === "EXPERT" && player.level > 50)

      const horseTypeMatch = !filters.horseType || player.favoriteHorse?.type === filters.horseType

      const statusMatch = !filters.status || player.status === filters.status

      const regionMatch = !filters.region || player.region === filters.region

      return searchMatch && levelMatch && horseTypeMatch && statusMatch && regionMatch
    })
  }, [searchTerm, filters])

  const sortedPlayers = useMemo(() => {
    const sorted = [...filteredPlayers]

    switch (sortBy) {
      case "TOTAL_POINTS":
        return sorted.sort((a, b) => b.totalPoints - a.totalPoints)
      case "LEVEL":
        return sorted.sort((a, b) => b.level - a.level)
      case "RACES_WON":
        return sorted.sort((a, b) => b.racesWon - a.racesWon)
      case "WIN_RATE":
        return sorted.sort((a, b) => b.winRate - a.winRate)
      case "TOKENS_EARNED":
        return sorted.sort((a, b) => b.tokensEarned - a.tokensEarned)
      case "HORSES_OWNED":
        return sorted.sort((a, b) => b.horsesOwned - a.horsesOwned)
      default:
        return sorted
    }
  }, [filteredPlayers, sortBy])

  const totalPages = Math.ceil(sortedPlayers.length / PAGE_SIZE)

  const paginatedPlayers = useMemo(
    () => sortedPlayers.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [sortedPlayers, currentPage],
  )

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages)
    }
  }, [totalPages, currentPage])

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort)
    setCurrentPage(1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Leaderboard</h1>
        <p className={styles.subtitle}>{"Compete with the best riders in Planet Horse"}</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <SearchBar
            value={searchTerm}
            onChange={(value) => {
              setSearchTerm(value)
              setCurrentPage(1)
            }}
            placeholder="Search players, wallets, horses..."
            orderBy={sortBy}
            onOrderChange={handleSortChange}
            showOptions={false}
          />
          <div style={{width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            <FilterDropdown filters={filters} onFiltersChange={handleFilterChange} />
          </div>
        </div>

        <div className={styles.resultsInfo}>
          <span className={styles.count}>
            {sortedPlayers.length} {sortedPlayers.length === 1 ? "Player" : "Players"}
          </span>
        </div>
      </div>

      <LeaderboardTable
        players={paginatedPlayers}
        currentPage={currentPage}
        pageSize={PAGE_SIZE}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  )
}

export default LeaderboardPage
