import { create } from "zustand"
import type { ChatMessage } from "@/types"

interface ChatStore {
  conversations: Array<{
    id: string
    title: string
    agentType: string
    messages: ChatMessage[]
    createdAt: string
  }>
  activeConversationId: string | null
  isLoading: boolean
  setActiveConversation: (id: string | null) => void
  addConversation: (conversation: any) => void
  addMessage: (conversationId: string, message: ChatMessage) => void
  setLoading: (loading: boolean) => void
  updateMessage: (conversationId: string, messageId: string, content: string) => void
}

export const useChatStore = create<ChatStore>((set) => ({
  conversations: [],
  activeConversationId: null,
  isLoading: false,
  setActiveConversation: (id) => set({ activeConversationId: id }),
  addConversation: (conversation) =>
    set((state) => ({ conversations: [conversation, ...state.conversations] })),
  addMessage: (conversationId, message) =>
    set((state) => ({
      conversations: state.conversations.map((c) =>
        c.id === conversationId
          ? { ...c, messages: [...c.messages, message] }
          : c
      ),
    })),
  setLoading: (loading) => set({ isLoading: loading }),
  updateMessage: (conversationId, messageId, content) =>
    set((state) => ({
      conversations: state.conversations.map((c) =>
        c.id === conversationId
          ? {
              ...c,
              messages: c.messages.map((m) =>
                m.id === messageId ? { ...m, content } : m
              ),
            }
          : c
      ),
    })),
}))
