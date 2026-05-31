/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  Reusable card component for displaying project information.
*/

type InfoCardProps = {
  title: string;
  description: string;
};

function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="card info-card shadow-sm h-100">
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InfoCard;