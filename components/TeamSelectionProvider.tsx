"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

export type TeamMemberId = "goro" | "ko" | "miu" | "ken";

type TeamSelectionContextValue = {
  selectedMemberId: TeamMemberId | null;
  selectMember: (memberId: TeamMemberId) => void;
};

const TeamSelectionContext = createContext<TeamSelectionContextValue | null>(
  null,
);

export default function TeamSelectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedMemberId, setSelectedMemberId] = useState<TeamMemberId | null>(
    null,
  );

  const value = useMemo(
    () => ({
      selectedMemberId,
      selectMember: setSelectedMemberId,
    }),
    [selectedMemberId],
  );

  return (
    <TeamSelectionContext.Provider value={value}>
      {children}
    </TeamSelectionContext.Provider>
  );
}

export function useTeamSelection() {
  const context = useContext(TeamSelectionContext);

  if (!context) {
    throw new Error(
      "useTeamSelection must be used within TeamSelectionProvider",
    );
  }

  return context;
}
