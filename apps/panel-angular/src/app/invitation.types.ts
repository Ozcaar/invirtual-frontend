export interface InvitationReadDTO {
  invitationUuid: string;
  name: string;
  invitationTypeId: number;
  maxPeople: number;
  slugUrl: string;
  creationDate: string;
  limitDate: string;
  isDemo: boolean;
  active: boolean;
}
