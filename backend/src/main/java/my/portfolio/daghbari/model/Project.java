package my.portfolio.daghbari.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    /*
    @ElementCollection
    @CollectionTable(name = "project_images", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "image")
    private List<String> image; // Liste d'images pour le carousel ou galerie
    */
    @ElementCollection
    @CollectionTable(name = "project_technologies", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "technology")
    private List<String> technologies; // Liste des technologies utilisées
    private String githubLink;
    private String detailedDescription;
    private String category;
    private String linkDemo;
    private String linkCode;
    private boolean isDemo;
    private boolean isCode;
    @ElementCollection
    @CollectionTable(name = "project_objectives", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "objective")
    private List<String> objectives; // Objectifs du projet
    @ElementCollection
    @CollectionTable(name = "project_features", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "feature")
    private List<String> features; // Fonctionnalités principales
    @ElementCollection
    @CollectionTable(name = "project_challenges", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "challenge")
    private List<String> challenges; // Défis rencontrés
    private String clientType; // Type de client (freelance, entreprise, projet académique)
}
