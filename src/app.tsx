import { useMemo, useRef, useState, useEffect } from "react"
import animeData, { getAnimeTitle } from "../anime-data"
import { domToBlob } from "modern-screenshot"
import { toast } from "sonner"
import { usePersistState } from "./hooks"
import { useI18n } from "./i18n-context"
import { LanguageToggle } from "./LanguageToggle"
import * as ContextMenu from '@radix-ui/react-context-menu';

export const App = () => {
  const { t, language } = useI18n()
  const [selectedAnime, setSelectedAnime] = usePersistState<string[]>(
    "selectedAnime",
    [],
  )

  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t("title")
  }, [language, t])

  const imageToBlob = async () => {
    if (!wrapper.current) return

    const blob = await domToBlob(wrapper.current, {
      scale: 2,
      filter(el) {
        if (el instanceof HTMLElement && el.classList.contains("remove")) {
          return false
        }
        return true
      },
    })

    return blob
  }

  const copyImage = async () => {
    const blob = await imageToBlob()

    if (!blob) return

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ])
  }

  const downloadImage = async () => {
    if (!wrapper.current) return

    const blob = await imageToBlob()

    if (!blob) return

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "vn-sedai.png"
    a.click()

    URL.revokeObjectURL(url)
  }

  const totalAnime = Object.values(animeData).flatMap((year) => {
    return year.map((item) => getAnimeTitle(item, "en")).slice(0, 12)
  }).length

  return (
    <>
      <div className="flex flex-col gap-4 pb-10">
        <div className="p-4 flex flex-col md:items-center">
          <div className="flex justify-end mb-4">
            <LanguageToggle />
          </div>
          <div className="w-full overflow-x-auto">
            <div
              className="flex flex-col border border-b-0 bg-white w-fit mx-auto"
              ref={wrapper}
            >
              <div className="border-b justify-between p-2 text-lg  font-bold flex">
                <h1>
                  {t("title")}
                  <span className="remove"> - {t("subtitle")}</span>
                  <span className="ml-2 text-zinc-400 font-medium">
                    {t("website")}
                  </span>
                </h1>
                <span className="shrink-0 whitespace-nowrap">
                  {t("watchedCount", {
                    count: selectedAnime.length,
                    total: totalAnime,
                  })}
                </span>
              </div>
              {Object.keys(animeData).map((year) => {
                const items = animeData[year] || []
                return (
                  <div key={year} className="flex border-b">
                    <div
                      className={`
                      bg-yellow-500 shrink-0 text-white flex items-center font-bold justify-center p-1 border-black
                      h-16 md:h-20 
                      ${language === "en" ? "w-16 md:w-20" : "w-16 md:w-20"}
                    `}
                    >
                      <span
                        className={`${
                          language === "en"
                            ? "text-sm md:text-base"
                            : "text-base"
                        } text-center`}
                      >
                        {year}
                      </span>
                    </div>
                    <div className="flex shrink-0">
                      {items.slice(0, 12).map((item) => {
                        const animeKey = getAnimeTitle(item, "en")
                        const displayTitle = getAnimeTitle(item, language)
                        const isSelected = selectedAnime.includes(animeKey)
                        return (
                          <ContextMenu.Root key={animeKey}>
                            <ContextMenu.Trigger asChild>
                              <button
                                key={animeKey}
                                className={`
                                  h-16 md:h-20 
                                  ${
                                    language === "en"
                                      ? "w-20 md:w-24"
                                      : "w-16 md:w-20"
                                  }
                                  border-l break-words text-center shrink-0 inline-flex items-center 
                                  p-1 overflow-hidden justify-center cursor-pointer 
                                  ${language === "en" ? "text-xs" : "text-sm"} 
                                  ${
                                    isSelected
                                      ? "bg-purple-500 font-bold text-white border-black"
                                      : "hover:bg-zinc-100"
                                  }
                                  transition-colors duration-200
                                `}
                                title={displayTitle}
                                onClick={() => {
                                  setSelectedAnime((prev) => {
                                    if (isSelected) {
                                      return prev.filter(
                                        (title) => title !== animeKey,
                                      )
                                    }
                                    return [...prev, animeKey]
                                  })
                                }}
                              >
                                <span
                                  className={`leading-tight w-full ${
                                    language === "en"
                                      ? "line-clamp-4"
                                      : "line-clamp-3"
                                  }`}
                                >
                                  {displayTitle}
                                </span>
                              </button>
                            </ContextMenu.Trigger>
                              <ContextMenu.Content className="rounded bg-white shadow p-2">
                              <ContextMenu.Label className="ContextMenuLabel text-zinc-500 flex justify-center items-center px-2 py-1">
                                {displayTitle}
                              </ContextMenu.Label>
                              <ContextMenu.Separator className="h-px bg-gray-300 my-1" />
                              <ContextMenu.Item asChild className="hover:text-blue-500 transition-colors duration-200 px-2 py-1 cursor-pointer">
                                <a
                                  href={`https://vndb.org/${item.ID}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Open VNDB
                                </a>
                              </ContextMenu.Item>
                            </ContextMenu.Content>
                          </ContextMenu.Root>
                        )
                      })}
                      {Array.from(
                        { length: Math.max(0, 12 - items.length) },
                        (_, index) => (
                          <div
                            key={`empty-${index}`}
                            className={`
                            h-16 md:h-20 
                            ${
                              language === "en"
                                ? "w-20 md:w-24"
                                : "w-16 md:w-20"
                            }
                            border-l bg-gray-50
                          `}
                          />
                        ),
                      )}
                      <div className="w-0 h-16 md:h-20 border-r" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              setSelectedAnime(
                Object.values(animeData).flatMap((year) => {
                  return year
                    .map((item) => getAnimeTitle(item, "en"))
                    .slice(0, 12)
                }),
              )
            }}
          >
            {t("selectAll")}
          </button>

          {selectedAnime.length > 0 && (
            <button
              type="button"
              className="border rounded-md px-4 py-2 inline-flex"
              onClick={() => {
                setSelectedAnime([])
              }}
            >
              {t("clear")}
            </button>
          )}

          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(copyImage(), {
                success: t("copySuccess"),
                loading: t("copying"),
                error(error) {
                  return t("copyFailed", {
                    error:
                      error instanceof Error
                        ? error.message
                        : t("unknownError"),
                  })
                },
              })
            }}
          >
            {t("copyImage")}
          </button>

          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(downloadImage(), {
                success: t("downloadSuccess"),
                loading: t("downloading"),
                error(error) {
                  return t("downloadFailed", {
                    error:
                      error instanceof Error
                        ? error.message
                        : t("unknownError"),
                  })
                },
              })
            }}
          >
            {t("downloadImage")}
          </button>
        </div>
        <div className="mt-2 text-center">
          {t("footer")}
          <a
            href={"https://x.com/natsuhara_aiko"}
            target="_blank"
            className="underline"
          >
            {t("inspiredBy")}
          </a>
        </div>
        <div className="text-center text-sm text-gray-600">
          {t("note")}
            <a
              href="https://anime-sedai.egoist.dev"
              target="_blank"
              className="underline"
            >
              Anime Sedai
            </a>
          {" - "}
          {t("madeBy")}
            <a
              href="https://x.com/kyorunobu"
              target="_blank"
              className="underline font-bold"
            >
              {t("creator")}
            </a>
          </div>
        </div>
    </>
  )
}
