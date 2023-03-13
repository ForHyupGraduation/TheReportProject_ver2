package back.back.domain.ratio;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPostAndTrading is a Querydsl query type for PostAndTrading
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPostAndTrading extends EntityPathBase<PostAndTrading> {

    private static final long serialVersionUID = 1628154615L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPostAndTrading postAndTrading = new QPostAndTrading("postAndTrading");

    public final back.back.domain.QCompany company;

    public final StringPath companyCode = createString("companyCode");

    public final StringPath date = createString("date");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Double> postPerDay = createNumber("postPerDay", Double.class);

    public final NumberPath<Double> tradingPerDay = createNumber("tradingPerDay", Double.class);

    public QPostAndTrading(String variable) {
        this(PostAndTrading.class, forVariable(variable), INITS);
    }

    public QPostAndTrading(Path<? extends PostAndTrading> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPostAndTrading(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPostAndTrading(PathMetadata metadata, PathInits inits) {
        this(PostAndTrading.class, metadata, inits);
    }

    public QPostAndTrading(Class<? extends PostAndTrading> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.company = inits.isInitialized("company") ? new back.back.domain.QCompany(forProperty("company"), inits.get("company")) : null;
    }

}

