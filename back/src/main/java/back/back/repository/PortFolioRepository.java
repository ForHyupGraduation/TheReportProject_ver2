package back.back.repository;

import back.back.domain.PortFolio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PortFolioRepository extends JpaRepository<PortFolio, Long> {
    List<PortFolio> findByMemberId(Long MemberId);
}
